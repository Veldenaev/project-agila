import Head from "next/head";

import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";
import { type Client, type Case } from "~/utils/types";
import Layout from "~/components/Layout";

async function deleteCase(id: string): Promise<void> {
  await fetch(`/api/case/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  theCase: Case & { client: Client };
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
              <h1 className="mb-2 text-center font-sans text-2xl">
                Case #{theCase.CaseNum}
              </h1>
              <p>
                Client&apos;s Name: {theCase.client.FirstName}{" "}
                {theCase.client.LastName} (Client ID: {theCase.client.ClientID})
              </p>
              <p>Contract ID: {theCase.ContractID}</p>
              <p>Status: {theCase.Status}</p>
              <p>Type: {theCase.Type}</p>
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
    },
  });
  return {
    props: { theCase },
  };
};
