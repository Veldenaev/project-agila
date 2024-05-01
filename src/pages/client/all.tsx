import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Client } from "@prisma/client";

interface Props {
  clients: Client[];
}

interface Row {
  name: string;
  id: number;
}

export default function AllClients({ clients }: Props) {
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
    }),
    columnHelper.accessor("id", {
      header: "Actions",
      cell: (info) => (
        <div className="flex flex-row gap-1">
          <button className="btn-blue">
            <a href={`/client/${info.renderValue() ?? -1}`}>View</a>
          </button>
        </div>
      ),
      enableSorting: false,
      enableColumnFilter: false,
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
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
              <span className="text-agila">All</span> clients
            </h1>
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
