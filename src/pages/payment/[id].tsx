import { type GetServerSideProps } from "next";
import { type Payment } from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { useSession } from "next-auth/react";

interface Props {
  payment: Payment;
}

export default function Payment({ payment }: Props) {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Update Payment</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={payment}
              type="payment"
              name="Payment"
              keys={["PaymentID", "ClientID"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Payment) => c.PaymentID}
              adding={false}
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
  const payment = await prisma.payment.findUnique({
    where: {
      PaymentID: Number(params?.id),
    },
  });
  return {
    props: { payment: JSON.parse(JSON.stringify(payment)) },
  };
};
