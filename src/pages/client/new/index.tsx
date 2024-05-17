import { type GetServerSideProps } from "next";
import { type Client } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultClient } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";
import prisma from "~/lib/prisma";

interface Props {
  nid: number;
  allContractIDs: number[];
}

export default function Client({ nid, allContractIDs }: Props) {
  const { data: session } = useSession();

  if (session == null || !session.user.isAdmin) {
    return <Block />;
  }

  const obj: Client = {
    ...defaultClient,
    ClientID: nid,
  };
  return (
    <>
      <Head>
        <title>Add Client</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="client"
              name="Client"
              keys={["ClientID"]}
              foreign={["ContractID"]}
              foreignChoices={allContractIDs}
              hide={[]}
              textarea={[]}
              identifier={(c: Client) => c.ClientID}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const allContractIDs = (await prisma.contract.findMany()).map(
    (c) => c.ContractID,
  );
  return {
    props: {
      nid: genID(),
      allContractIDs,
    },
  };
};
