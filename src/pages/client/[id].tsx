import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Client, type Lawyer, type Case } from "~/utils/types";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Shadow from "~/components/Shadow";
import Table from "~/components/Table";

interface Props {
  client: Client & { cases: Case[] };
}

export default function Client({ client }: Props) {
  const data = client.cases;
  const columnHelper = createColumnHelper<Case>();
  const columns = [
    columnHelper.accessor("CaseNum", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ContractID", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ClientID", {
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("Status", {
      header: "Status",
    }),
    columnHelper.accessor("Type", {
      header: "Type",
    }),
  ];
  return (
    <>
      <Head>
        <title>{client.FirstName}&apos;s Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col">
        <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
            <span className="text-agila">{client.FirstName}</span>
            &apos;s cases
          </h1>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = await prisma.client.findUnique({
    where: {
      ClientID: Number(params?.id),
    },
    include: {
      cases: true,
    },
  });
  return {
    props: { client },
  };
};
