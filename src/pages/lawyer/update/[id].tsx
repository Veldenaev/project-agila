import React from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { type Lawyer } from "~/utils/types";
import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";
import Form from "~/components/Form";

interface Props {
  lawyer: Lawyer;
}

export default function UpdateCase({ lawyer }: Props) {
  return (
    <>
      <Head>
        <title>Update Case</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <Form
            obj={lawyer}
            type="lawyer"
            name="Lawyer"
            p_keys={["LawyerID"]}
            id_func={(l: Lawyer) => l.LawyerID}
          />
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lawyer = await prisma.lawyer.findUnique({
    where: {
      LawyerID: Number(params?.id),
    },
  });
  return {
    props: { lawyer },
  };
};
