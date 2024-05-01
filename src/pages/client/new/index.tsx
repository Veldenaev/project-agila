import { type GetServerSideProps } from "next";
import { type Client } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultClient } from "~/utils/defaults";
import genID from "~/utils/genID";

interface Props {
  nid: number;
}

export default function Client({ nid }: Props) {
  const obj: Client = {
    ...defaultClient,
    ClientID: nid,
  };
  return (
    <>
      <Head>
        <title>Update Client</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="client"
              name="Client"
              keys={["ClientID"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Client) => c.ClientID}
              adding={true}
              stay={false}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      nid: genID(),
    },
  };
};
