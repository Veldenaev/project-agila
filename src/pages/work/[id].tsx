import { type GetServerSideProps } from "next";
import { type Work } from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Form from "~/components/Form";
import Layout from "~/components/Layout";

interface Props {
  work: Work;
}

export default function Work({ work }: Props) {
  return (
    <>
      <Head>
        <title>Update Work</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={work}
              type="work"
              name="Work"
              keys={["WorkID", "CaseNum"]}
              hide={[]}
              textarea={[]}
              identifier={(w: Work) => w.WorkID}
              adding={false}
              stay={false}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const work = await prisma.work.findUnique({
    where: {
      WorkID: Number(params?.id),
    },
  });
  return {
    props: { work: JSON.parse(JSON.stringify(work)) },
  };
};
