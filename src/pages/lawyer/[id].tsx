import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Lawyer, type Case, type Client } from "~/utils/types";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Layout from "~/components/Layout";
import Table from "~/components/Table";

interface Props {
  lawyer: Lawyer & { cases: (Case & { client: Client })[] };
}

export default function Lawyer({ lawyer }: Props) {
  const data = lawyer.cases ?? [];
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
  const data2: Client[] = lawyer.cases.flatMap((oneCase) => oneCase.client);
  const columnHelper2 = createColumnHelper<Client>();
  const columns2 = [
    columnHelper2.accessor("FirstName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper2.accessor("LastName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper2.accessor("Email", {
      cell: (info) => info.renderValue(),
    }),
  ];
  return (
    <>
      <Head>
        <title>{lawyer.FirstName}&apos;s Dashboard</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="font-bold tracking-tight text-white sm:text-[2rem]">
                <span className="text-agila">{lawyer.FirstName}</span>
                &apos;s cases
              </h1>
              <Table columns={columns} data={data} />
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-[2rem]">
                <span className="text-agila">{lawyer.FirstName}</span>
                &apos;s accounts
              </h1>
              <Table columns={columns2} data={data2} />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lawyer = await prisma.lawyer.findUnique({
    where: {
      LawyerID: Number(params?.id),
    },
    include: {
      cases: {
        include: {
          client: true,
        },
      },
    },
  });
  return {
    props: { lawyer },
  };
};
