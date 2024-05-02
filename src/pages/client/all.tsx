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

  const [selectedClient, setClient] = useState((data.find(initialClientIndex => initialClientIndex.index === 0)?.orignal.ClientID));

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
        <main className="flex min-h-screen min-w-full flex-row">
          <Selector data={data} columns={columns} onRowSelect={receiveClient}/>
          <div className="z-10 bg-white flex flex-col w-64 h-80 rounded-r justify-center my-auto items-center">
            <b className="text-black">Name: {selectedClient?.LastName} {selectedClient?.FirstName}, {selectedClient?.MiddleName}</b>
            <b className="text-black">Address: {selectedClient?.CityAdd}</b>
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
