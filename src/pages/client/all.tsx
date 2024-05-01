import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Client } from "@prisma/client";
import Link from "next/link";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";

interface Props {
  clients: Client[];
}

interface Row {
  name: string;
  id: number;
}

export default function AllClients({ clients }: Props) {
  const router = useRouter();
  const data: Row[] = clients
    .map((client) => ({
      name: `${client.LastName}, ${client.FirstName} ${client.MiddleName}`,
      id: client.ClientID,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  const columnHelper = createColumnHelper<Row>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("id", {
      header: "Client ID",
      cell: (info) => (
        <div className="flex flex-row items-center justify-between">
          <p>{info.getValue()}</p>
          <div className="flex flex-row gap-1">
            <Link className="btn-blue" href={`/client/${info.getValue()}`}>
              View
            </Link>
            <button
              className="btn-red"
              onClick={async () => {
                await pingDelete("client", info.getValue());
                router.refresh();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    }),
  ];
  return (
    <>
      <Head>
        <title>All Clients</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex flex-row items-center gap-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                <span className="text-agila">All</span> clients
              </h1>
              <Link className="btn-blue" href="/client/new/">
                <p>Add</p>
              </Link>
            </div>
            <MyTable data={data} columns={columns} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const clients = await prisma.client.findMany();
  return {
    props: { clients },
  };
};
