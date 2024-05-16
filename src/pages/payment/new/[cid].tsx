import { type GetServerSideProps } from "next";
import { type Payment } from "@prisma/client";
import Head from "next/head";
import Form from "~/components/Form";
import Layout from "~/components/Layout";
import { defaultPayment } from "~/utils/defaults";
import genID from "~/utils/genID";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";

interface Props {
  cid: string;
  nid: number;
}

export default function Payment({ cid, nid }: Props) {
  const { data: session } = useSession();

  if (!session || !session.user.isAdmin) {
    return <Block />;
  }

  const obj: Payment = {
    ...defaultPayment,
    PaymentID: nid,
    ClientID: parseInt(cid),
  };
  return (
    <>
      <Head>
        <title>Update Payment</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Form
              obj={obj}
              type="payment"
              name="Payment"
              keys={["PaymentID", "ClientID"]}
              hide={[]}
              textarea={[]}
              identifier={(c: Payment) => c.PaymentID}
              adding={true}
              stay={false}
              authorized={session.user.isAdmin}
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
