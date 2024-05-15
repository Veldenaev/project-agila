import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/SelectorTable";
import prisma from "~/lib/prisma";
import { type Contract } from "@prisma/client";
import Link from "next/link";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";

interface Props {
  contracts: Contract[];
  cid: number;
}

interface Row {
  title: string | number;
  id: number;
}

export default function AllContracts({ contracts, cid }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const data: Row[] = contracts
    .map((contract) => ({
      title: contract.JuniorAssocApp ?? 0,
      id: contract.ContractID,
    }))
    .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  const columnHelper = createColumnHelper<Row>();
  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
    }),
    columnHelper.accessor("id", {
      header: "Contract ID",
      cell: (info) => (
        <div className="flex flex-row items-center justify-between">
          <p>{info.getValue()}</p>
          {session?.user.isAdmin && (
            <div className="flex flex-row gap-1">
              <Link
                className="btn-blue"
                href={`/contract/edit/${info.getValue()}`}
              >
                Edit
              </Link>
              <button
                className="btn-red"
                onClick={async () => {
                  await pingDelete("contract", info.getValue());
                  router.refresh();
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ),
    }),
  ];

  if (session == null) {
    return <Block title="All Contracts" />;
  }

  return (
    <>
      <Head>
        <title>All Contracts</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex flex-row items-center gap-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                <span className="text-agila">All</span> contracts
              </h1>
              {session?.user.isAdmin && (
                <Link className="btn-blue" href={`/contract/new/${cid}`}>
                  Add
                </Link>
              )}
            </div>
            <MyTable data={data} columns={columns} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contracts = await prisma.contract.findMany({
    where: {
      ClientID: Number(params?.cid),
    },
  });
  return {
    props: {
      contracts: JSON.parse(JSON.stringify(contracts)),
      cid: params?.cid,
    },
  };
};
