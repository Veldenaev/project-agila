import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Case } from "~/utils/types";

async function deleteCase(id: string): Promise<void> {
  await fetch(`/api/case/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  cases: Case[];
}

export default function AllCases({ cases }: Props) {
  const data = cases;
  const columnHelper = createColumnHelper<Case>();
  const columns = [
    columnHelper.accessor("CaseNum", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ContractID", {
      header: () => <span>Contract ID</span>,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ClientID", {
      header: () => "Client ID",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("Status", {
      header: "Status",
    }),
    columnHelper.accessor("Type", {
      header: "Type",
    }),
    columnHelper.accessor("CaseNum", {
      header: "Actions",
      cell: (info) => (
        <div className="flex flex-row gap-1">
          <button className="btn-blue">
            <a href={`/case/${info.renderValue() ?? "all"}`}>View</a>
          </button>
          <button className="btn-yellow">
            <a href={`/case/update/${info.renderValue() ?? "all"}`}>Update</a>
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
  const cases = await prisma.cases.findMany();
  return {
    props: { cases },
  };
};
