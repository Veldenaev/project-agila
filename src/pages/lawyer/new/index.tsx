import { type GetServerSideProps } from "next";
import { type Lawyer } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultLawyer } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";

interface Props {
  nid: number;
}

export default function Lawyer({ nid }: Props) {
  const { data: session } = useSession();

  if (session == null || !session.user.isAdmin) {
    return <Block title="Add Lawyer" />;
  }

  const obj: Lawyer = {
    ...defaultLawyer,
    LawyerID: nid,
  };
  return (
    <>
      <Head>
        <title>Add Lawyer</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="lawyer"
              name="Lawyer"
              keys={["LawyerID"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Lawyer) => c.LawyerID}
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
