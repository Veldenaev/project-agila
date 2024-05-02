import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import Selector from "~/components/SelectorTable";
import prisma from "~/lib/prisma";
import { type Client } from "@prisma/client";
import { useState } from "react";

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

  const [selectedClient, setClient] = useState(clients.find(clientSelect => clientSelect.ClientID === 1));

  const receiveClient = (newClientID: number) => {
    const newClient = clients.find((clientSelect) => clientSelect.ClientID === newClientID);
    setClient(newClient);
  }

  const columnHelper = createColumnHelper<Row>();

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
  ];

  return (
    <>
      <Head>
        <title>All Clients</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen min-w-full flex-row ">
          <Selector data={data} columns={columns} onRowSelect={receiveClient}/>
          {/* <div className="flex flex-col w-80 bg-white">
            
          </div> */}

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
