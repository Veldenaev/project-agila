import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import Selector from "~/components/SelectorTable";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Client, Case } from "@prisma/client";
import { useState } from "react";
import Link from "next/link";

interface Props {
  clients: Client[];
  clientCases: Case[];
}

interface clientRow {
  name: string;
  id: number;
}

interface caseRow {
  title: string;
  id: string;
}

export default function AllClients({ clients, clientCases }: Props) {

  const clientData: clientRow[] = clients.map((client) => ({
      name: `${client.LastName}, ${client.FirstName} ${client.MiddleName}`,
      id: client.ClientID,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const [selectedClient, setClient] = useState(clients.find(clientSelect => clientSelect.ClientID === 1));

  const [caseData, setCaseData] = useState((clientCases.filter((filteredCase) => {return filteredCase.ClientID === 1})).map((clientCase) => ({
    title: `${clientCase.Title}`,
    id: clientCase.CaseNum,
  })).sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0)));

  const receiveClient = (newClientID: number) => {
    const newClient = clients.find((clientSelect) => clientSelect.ClientID === newClientID);
    setClient(newClient);
    const filteredCases: Case[] = clientCases.filter((toFilter) => {return toFilter.ClientID === newClientID})
    const newCaseData: caseRow[] = filteredCases.map((clientCase) => ({
      title: `${clientCase.Title}`,
      id: clientCase.CaseNum,
    })).sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
    setCaseData(newCaseData)
  }

  const clientColumnHelper = createColumnHelper<clientRow>();
  const caseColumnHelper = createColumnHelper<caseRow>();

  const clientCol = [
    clientColumnHelper.accessor("name", {
      header: "Accounts",
    }),
  ];
  const caseCol = [
    caseColumnHelper.accessor("title", {
      header: "Cases",
    }),
    caseColumnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <Link className="btn-blue" href={`/case/${info.getValue()}`}>
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
      ), enableColumnFilter: false, enableSorting: false,
    }),
  ];

  return (
    <>
      <Head>
        <title>All Clients</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen min-w-full flex-row justify-center gap-1">
          <Selector data={clientData} columns={clientCol} onRowSelect={receiveClient}/>
          <div className="z-10 bg-white flex flex-col justify-center my-auto items-left gap-y-2 rounded-md pl-5 min-h-80 min-w-80">
            <b className="text-black text-2xl">{selectedClient?.LastName} {selectedClient?.FirstName}, {selectedClient?.MiddleName}</b>
            <b className="text-black">Address: {selectedClient?.CityAdd}</b>
            <b className="text-black">Tel #: {selectedClient?.TelNum}</b>
            <b className="text-black">Cel #: {selectedClient?.CellNum}</b>
            <b className="text-black">Email: {selectedClient?.Email}</b>
            <b className="text-black">Username: {selectedClient?.user}</b>
          </div>
          <MyTable data={caseData} columns={caseCol}/>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const clients = await prisma.client.findMany();
  const clientCases = await prisma.case.findMany();
  return {
    props: { clients, clientCases },
  };
};
