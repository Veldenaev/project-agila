import Head from "next/head";

import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";
import { type Case } from "~/utils/types";
import Layout from "~/components/Layout";

async function deleteCase(id: string): Promise<void> {
  await fetch(`/api/case/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  theCase: Case;
}

export default function Case({ theCase }: Props) {
  return (
    <>
      <Head>
        <title>Cases | Project Agila</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-5">
            <div className="rounded-md bg-white p-4">
              <h1 className="text-center font-sans text-2xl">
                {theCase.CaseNum}
              </h1>
              <p>Contract ID: {theCase.ContractID}</p>
              <p>Client ID: {theCase.ClientID}</p>
            </div>
            <div>
              <button>Update</button>
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
  });
  return {
    props: { theCase },
  };
};
