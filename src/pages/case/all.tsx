import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Case } from "@prisma/client";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  cases: Case[];
}

export default function AllCases({ cases }: Props) {
  const router = useRouter();
  const data = cases;
  const columnHelper = createColumnHelper<Case>();
  const columns = [
    columnHelper.accessor("CaseNum", {
      cell: (info) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <p>{info.getValue()}</p>
          <div className="flex flex-row gap-1">
            <Link className="btn-blue" href={`/case/${info.getValue()}`}>
              View
            </Link>
            <button
              className="btn-red"
              onClick={async () => {
                await pingDelete("case", info.getValue());
                router.refresh();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    }),
    columnHelper.accessor("ContractID", {
      header: () => <span>Contract ID</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ClientID", {
      header: () => "Client ID",
      cell: (info) => info.getValue(),
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
        <title>All Cases</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
              <span className="text-agila">All</span> Cases
            </h1>
            <MyTable data={data} columns={columns} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cases = await prisma.case.findMany();
  return {
    props: { cases },
  };
};
