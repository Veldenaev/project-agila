import { type GetServerSideProps } from "next";
import { type Contract } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultContract } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";

interface Props {
  cid: number;
  nid: number;
}

export default function Contract({ cid, nid }: Props) {
  const { data: session } = useSession();
  const obj: Contract = {
    ...defaultContract,
    ContractID: nid,
    ClientID: cid,
  };
  return (
    <>
      <Head>
        <title>Add Contract</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="contract"
              name="Contract"
              keys={["ContractID", "ClientID", "RootContractID"]}
              hide={["isAmendment"]}
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
      cid: Number(params?.cid),
      nid: genID(),
    },
  };
};
