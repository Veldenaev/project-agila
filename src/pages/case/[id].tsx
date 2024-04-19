import Head from "next/head";

import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";
import {
  type Client,
  type Case,
  type Work,
  type Contract,
} from "~/utils/types";
import Layout from "~/components/Layout";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "~/components/Table";

async function deleteCase(id: string): Promise<void> {
  await fetch(`/api/case/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  theCase: Case & { client: Client; contract: Contract };
}

export default function Case({ theCase }: Props) {
  const data: Work[] = [];
  const columnHelper = createColumnHelper<Work>();
  const columns = [
    columnHelper.accessor("WorkID", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("FeeAmt", {
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <Head>
        <title>Case {theCase.CaseNum} Information</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-5">
            <h1 className="mb-2 text-center font-sans text-2xl text-5xl font-bold text-white">
              Case #<span className="text-agila">{theCase.CaseNum}</span>
            </h1>
            <div className="flex flex-row gap-5 rounded-md bg-white p-4">
              <div className="flex flex-col gap-1 rounded-md border border-solid border-black p-3">
                <p className="font-bold">Client Info</p>
                <p>
                  Client: {theCase.client.FirstName} {theCase.client.LastName}
                </p>
                <p>
                  Status{" "}
                  <span className="rounded-md bg-green-500 px-2 py-1 text-white">
                    {theCase.Status}
                  </span>
                </p>
                <p>Type: {theCase.Type}</p>
              </div>
              <div className="rounded-md border border-solid border-black p-3">
                <p className="font-bold">Contract Info</p>
                <p>Major Pleading: {theCase.contract.MajorPleading}</p>
                <p>Minor Pleading: {theCase.contract.MinorPleading}</p>
              </div>
              <div>
                <p className="font-bold">Work Involved</p>
                <Table data={data} columns={columns} />
                <p>
                  Total:{" "}
                  {data
                    .map((work) => work.FeeAmt)
                    .reduce((acc, cur) => acc + cur, 0)}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <button className="btn-blue">
                <a href={`/case/update/${theCase.CaseNum}`}>Update</a>
              </button>
              <button
                className="btn-red"
                onClick={() => deleteCase(theCase.CaseNum)}
              >
                Delete
              </button>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const theCase = await prisma.cases.findUnique({
    where: {
      CaseNum: String(params?.id),
    },
    include: {
      client: true,
      contract: true,
    },
  });
  return {
    props: { theCase },
  };
};
