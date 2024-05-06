import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import prisma from "~/lib/prisma";
import { type Client, type Case } from "@prisma/client";
import Link from "next/link";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import { useState } from "react"; 
import Block from "~/components/Block";
import { getSession } from "next-auth/react"; 
import Selector from "~/components/SelectorTable";

interface Props {
  clients: Client[];
  cases: Case[];
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

  const data: Row[] = clients
    .map((client) => ({
      name: `${client.LastName}, ${client.FirstName} ${client.MiddleName}`,
      id: client.ClientID,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const columnHelper = createColumnHelper<Row>();

  const columns = [

    columnHelper.accessor("name", {
      header: "Account Name",
    }),

    columnHelper.accessor('id', {
      header: '',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => (
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <button className="btn-blue"
              onClick={async() => {
                setSelectedClientID(info.getValue());
              }}
            >
              Select
            </button>
  
            {/* Conditionally show a delete button for admins */}
            {session?.user.isAdmin && (
              <button className="btn-red" 
                onClick={async () => {
                  await pingDelete("client", info.getValue());
                  router.refresh();
                }}
              >
                Delete
              </button>
            )}
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
              {session?.user.isAdmin && (
                <Link className="btn-blue" href="/client/new/">
                  <p>Add</p>
                </Link>
              )}
            </div>
            <Selector data={data} columns={columns} selectedClientRow={selectedClientID} />
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

  if(session?.user.isAdmin) {
    clients = await prisma.client.findMany();
    cases = await prisma.case.findMany();
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
    props: { clients, cases },
  };
};

