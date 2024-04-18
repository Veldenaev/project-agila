import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Client } from "~/utils/types";

async function deleteClient(id: number): Promise<void> {
  await fetch(`/api/client/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  clients: Client[];
}

export default function AllClients({ clients }: Props) {
  const data = clients;
  const columnHelper = createColumnHelper<Client>();
  const columns = [
    columnHelper.accessor("ClientID", { header: "Client ID" }),
    columnHelper.accessor("ContractID", { header: "Contract ID" }),
    columnHelper.accessor("FirstName", {
      header: "First Name",
    }),
    columnHelper.accessor("LastName", {
      header: "Last Name",
    }),
    columnHelper.accessor("MiddleName", {
      header: "Middle Name",
    }),
    columnHelper.accessor("ClientID", {
      cell: (info) => (
        <div className="flex flex-row gap-1">
          <button className="btn-blue">
            <a href={`/client/${info.renderValue() ?? -1}`}>View</a>
          </button>
          <button className="btn-yellow">
            <a href={`/client/update/${info.renderValue() ?? -1}`}>Update</a>
          </button>
          <button
            className="btn-red"
            onClick={() => deleteClient(info.renderValue() ?? -1)}
          >
            Delete
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
