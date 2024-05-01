import { type GetServerSideProps } from "next";
import { type Contract } from "@prisma/client";
import Head from "next/head";
import prisma from "../../../lib/prisma";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import Link from "next/link";

interface Props {
  contract: Contract;
}

export default function Contract({ contract }: Props) {
  return (
    <>
      <Head>
        <title>Update Contract</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={contract}
              type="contract"
              name="Contract"
              keys={["ContractID", "ClientID", "RootContractID"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Contract) => c.ContractID}
              adding={false}
              stay={false}
            />
            <Link
              className="btn-blue text-xl"
              href={`/contract/amend/${contract.ClientID}/${contract.ContractID}`}
            >
              Create Amendment
            </Link>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contract = await prisma.contract.findUnique({
    where: {
      ContractID: Number(params?.id),
    },
  });
  return {
    props: { contract: JSON.parse(JSON.stringify(contract)) },
  };
};
