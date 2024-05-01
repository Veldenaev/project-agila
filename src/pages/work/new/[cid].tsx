import { type GetServerSideProps } from "next";
import { type Work } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultWork } from "~/utils/defaults";
import genID from "~/utils/genID";

interface Props {
  cid: string;
  nid: number;
}

export default function Work({ cid, nid }: Props) {
  const obj: Work = {
    ...defaultWork,
    WorkID: nid,
    CaseNum: cid,
  };
  return (
    <>
      <Head>
        <title>Update Work</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="work"
              name="Work"
              keys={["WorkID", "CaseNum"]}
              hide={[]}
              textarea={[]}
              identifier={(w: Work) => w.WorkID}
              adding={true}
              stay={false}
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
      cid: params?.cid,
      nid: genID(),
    },
  };
};
