import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Lawyer, type Case, type Client } from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Layout from "~/components/Layout";
import Table from "~/components/SelectorTable";
import Form from "~/components/Form";

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
  return (
    <>
      <Head>
        <title>Lawyer Dashboard</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex flex-row gap-5">
              <Form
                obj={lawyer}
                type="lawyer"
                name="Lawyer"
                p_keys={["LawyerID"]}
                hide={["isManager", "pass", "cases"]}
                id_func={(l: Lawyer) => l.LawyerID}
              />
              <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="font-bold tracking-tight text-white sm:text-[2rem]">
                  <span className="text-agila">{lawyer.FirstName}</span>
                  &apos;s Cases
                </h1>
                <Table columns={columns} data={data} />
              </div>
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
