import { type GetServerSideProps } from "next";
import { type Contract } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultContract } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";

interface Props {
  root: number;
  cid: number;
  nid: number;
}

export default function Contract({ root, cid, nid }: Props) {
  const { data: session } = useSession();
  const obj: Contract = {
    ...defaultContract,
    ContractID: nid,
    ClientID: cid,
    RootContractID: root,
    isAmendment: true,
  };
  return (
    <>
      <Head>
        <title>Update Contract</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="contract"
              name="Contract"
              keys={["ContractID", "ClientID", "RootContractID", "isAmendment"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Contract) => c.ContractID}
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
  return {
    props: {
      root: Number(params?.root),
      cid: Number(params?.cid),
      nid: genID(),
    },
  };
};
