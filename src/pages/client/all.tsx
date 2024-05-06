import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import prisma from "~/lib/prisma";
import { type Client, type Case, type Payment } from "@prisma/client";
import Link from "next/link";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import { useState, useMemo } from "react"; 
import Block from "~/components/Block";
import { getSession } from "next-auth/react"; 
import Selector from "~/components/SelectorTable";

interface Props {
  clients: Client[];
  cases: Case[];
  payments: Payment[];
}

interface Row {
  name: string;
  id: number;
}

export default function AllClients({ clients }: Props) {

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    !session ? router.push('/rerouter') : null
    })
  
  if (session?.user.isClient === true) {
    return <Block title='unauthorized access' />
  }

  const [selectedClientID, setSelectedClientID] = useState<number>();

  const selectedClient: Client | undefined = useMemo(() => {return clients.find((clientSelect) => clientSelect.ClientID === selectedClientID)},[selectedClientID])

  const data: Row[] = useMemo(() => {return clients.map((client) => ({
      name: `${client.LastName}, ${client.FirstName} ${client.MiddleName}`,
      id: client.ClientID,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))}, [clients]);

  const columnHelper = createColumnHelper<Row>();

  const columns = useMemo(() => {return [

    columnHelper.accessor("name", {
      header: "Account Name",
    }),
  ]}, []);

  return (
    <>
      <Head>
        <title>All Clients</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center px-4 gap-12 py-16 ">
            <div className="flex flex-row items-center gap-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                Accounts
              </h1>
              {session?.user.isAdmin && (
                <Link className="btn-blue" href="/client/new/">
                  <p>Add</p>
                </Link>
              )}
            </div>
            <div className="flex flex-row bg-white rounded-md p-1">
              <Selector data={data} columns={columns} onRowSelect={setSelectedClientID} tailClass="flex flex-col bg-white min-h-72 min-w-64 rounded-l-md items-center"/>
              <table className="flex flex-col min-w-72 rounded-r-md text-left min-h-72 justify-center pr-4">
                <thead className="text-2xl">
                  <tr>
                    <th>{selectedClient? `${selectedClient?.LastName}, ${selectedClient?.FirstName} ${selectedClient?.MiddleName}` : 'Select an account'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-xl">{selectedClient?.CityAdd ? `${selectedClient?.CityAdd}` : ''}</td>
                  </tr>
                  <tr>
                    <td>{selectedClient?.TelNum ? `${selectedClient?.TelNum}` : ''}{(selectedClient?.TelNum && selectedClient?.CellNum) ? ' | ' : ''}{selectedClient?.CellNum ? `${selectedClient?.CellNum}` : ''}</td>
                  </tr>
                  <tr>
                    <td >{selectedClient?.Email ? `${selectedClient?.Email}` : ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  let clients: Client[] = [];
  let cases: Case[] = [];
  let payments: Payment[] = [];

  if(session?.user.isAdmin) {
    clients = await prisma.client.findMany();
    cases = await prisma.case.findMany();
    payments = await prisma.payment.findMany();

    payments = payments.map(payment => ({
      ...payment,
      Date: payment.Date?.toISOString()
    }))

  } else if(session?.user.isLawyer) {
    cases = await prisma.case.findMany({
      include: {
        lawyers: true,
      },
      where: {
        lawyers: {
          some: {
            LawyerID: parseInt(session.user.id)
          }
        }
      }
    });

    const ClientIDs = cases.map(caseInstance => caseInstance.ClientID);
    clients = await prisma.client.findMany({
      where: {
        ClientID: {
          in: ClientIDs
        }
      }
    });
  } 

  return {
    props: { clients, cases, payments },
  };
};

