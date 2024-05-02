import Head from "next/head";

import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";
import {
  type Client,
  type Case,
  type Work,
  type Contract,
  type Lawyer,
} from "@prisma/client";
import Layout from "~/components/Layout";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "~/components/SelectorTable";
import CaseForm from "~/components/CaseForm";

interface Props {
  theCase: Case & { client: Client; contract: Contract; lawyers: Lawyer[] };
}

export default function Case({ theCase }: Props) {
  const data: Work[] = [];
  const columnHelper = createColumnHelper<Work>();
  const columns = [
    columnHelper.accessor("Title", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Date", {
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <Head>
        <title>Case Information</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row gap-10">
              <CaseForm
                obj={theCase}
                type="case"
                name="Case"
                p_keys={["CaseNum", "ContractID", "ClientID"]}
                hide={["client", "contract", "lawyers"]}
                id_func={(c: Case) => c.CaseNum}
              />
              <div className="flex flex-col justify-center gap-5">
                <h1 className="text-center font-bold tracking-tight text-white sm:text-[2rem]">
                  Work Involved
                </h1>
                <Table data={data} columns={columns} />
                <p className="text-white">
                  Total:{" "}
                  {data
                    .map((work) => work.FeeAmt ?? 0)
                    .reduce((acc, cur) => acc + cur, 0)}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <h1 className="text-center font-bold tracking-tight text-white sm:text-[2rem]">
                  Assigned Lawyers
                </h1>
                <div className="flex flex-col gap-1 rounded-md bg-white">
                  {theCase.lawyers.map((lawyer, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-between gap-1 px-3 py-2"
                    >
                      <p>{lawyer.LastName + ", " + lawyer.FirstName}</p>
                      <button className="btn-red">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const theCase = await prisma.case.findUnique({
    where: {
      CaseNum: String(params?.id),
    },
    include: {
      client: true,
      contract: true,
      lawyers: true,
    },
  });
  return {
    props: { theCase: JSON.parse(JSON.stringify(theCase)) },
  };
};
