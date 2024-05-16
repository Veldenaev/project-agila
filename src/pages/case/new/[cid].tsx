import { type GetServerSideProps } from "next";
import { type Case } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultCase } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";
import prisma from "~/lib/prisma";

interface Props {
  cid: number;
  nid: string;
  nid2: number;
}

export default function Contract({ cid, nid, nid2 }: Props) {
  const { data: session } = useSession();
  const obj: Case = {
    ...defaultCase,
    CaseNum: nid,
    ClientID: cid,
    ContractID: nid2,
  };
  return (
    <>
      <Head>
        <title>Add Case</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="case"
              name="Case"
              keys={["CaseNum", "ContractID", "ClientID", "RootContractID"]}
              hide={["isAmendment"]}
              textarea={[]}
              identifier={(c: Case) => c.CaseNum}
              adding={true}
              stay={false}
              authorized={session?.user.isAdmin ?? false}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const possibleContractIDs = (await prisma.contract.findMany()).map(
    (c) => c.ContractID,
  );
  return {
    props: {
      cid: Number(params?.cid),
      nid: String(genID()),
      nid2: possibleContractIDs[
        Math.floor(Math.random() * possibleContractIDs.length)
      ],
    },
  };
};
