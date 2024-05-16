import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import {
  type Client,
  type Case,
  type Payment,
  type Contract,
} from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Table from "~/components/SelectorTable";
import Form from "~/components/Form";
import Link from "next/link";
import Layout from "~/components/Layout";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";

interface Props {
  client: Client & {
    contracts: Contract[];
    cases: Case[];
    payments: Payment[];
  };
  contract: Contract;
}

interface CaseRow {
  num: string;
  status: string | null;
  type: string | null;
}

interface PaymentRow {
  refNum: number;
  amount: number;
  date: Date | null;
}

export default function Client({ client, contract }: Props) {
  const { data: session } = useSession();

  if (!client) {
    return <Block title="Client not found" body="Client not found" />;
  }
  
  if (
    session == null ||
    (!session.user.isAdmin && Number(session.user.id) !== client.ClientID)
  ) {
    return <Block />;
  }

  const router = useRouter();
  const { cases, payments, contracts, ...obj } = client;
  const casesData: CaseRow[] = cases.map((c) => ({
    num: c.CaseNum,
    status: c.Status,
    type: c.Type,
  }));
  const casesColumnHelper = createColumnHelper<CaseRow>();
  const casesColumns = [
    casesColumnHelper.accessor("num", {
      header: "Case Number",
      cell: (info) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <p>{info.getValue()}</p>
            <div className="flex flex-row gap-1">
              <Link className="btn-blue" href={`/case/${info.getValue()}`}>
                View
              </Link>
              {session?.user.isAdmin && (
              <button
                className="btn-red"
                onClick={async () => {
                  await pingDelete("case", info.getValue());
                  router.refresh();
                }}
              >
                Delete
              </button>
              )}
            </div>
          
        </div>
      ),
    }),
    casesColumnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    casesColumnHelper.accessor("type", {
      header: "Type",
      cell: (info) => info.renderValue(),
    }),
  ];
  const paymentsData: PaymentRow[] = payments.map((payment) => ({
    refNum: payment.PaymentID,
    amount: payment.Amount,
    date: payment.Date,
  }));
  const paymentsColumnHelper = createColumnHelper<PaymentRow>();
  const paymentsColumns = [
    paymentsColumnHelper.accessor("refNum", {
      header: "Reference Number",
      cell: (info) => (
        <div className="flex flex-row items-center justify-between gap-3">
          <p className="flex w-full items-center justify-center">
            {info.getValue()}
          </p>
          {session?.user.isAdmin && (
            <div className="flex flex-row gap-1">
              <Link className="btn-blue" href={`/payment/${info.getValue()}`}>
                Edit
              </Link>
              <button
                className="btn-red"
                onClick={async () => {
                  await pingDelete("payment", info.getValue());
                  router.refresh();
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ),
    }),
    paymentsColumnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
    }),
    paymentsColumnHelper.accessor("date", {
      header: "Date",
      cell: (info) => {
        const d = new Date(String(info.getValue()));
        return (
          <div>
            {d.getMonth() + 1}/{d.getDate()}/{d.getFullYear()}
          </div>
        );
      },
    }),
  ];

  return (
    <>
      <Head>
        <title>Client Dashboard</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col items-center justify-center gap-10">
                <Form
                  obj={obj}
                  type="client"
                  name="Client"
                  keys={["ClientID", "ContractID"]}
                  hide={["pass"]}
                  textarea={[]}
                  identifier={(c: Client) => c.ClientID}
                  adding={false}
                  stay={true}
                  authorized={session?.user.isAdmin ?? false}
                />
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-row gap-6">
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
                      <span className="text-agila">Default</span> contract
                    </h1>
                    <Link
                      className="btn-blue"
                      href={`/contract/${client.ClientID}`}
                    >
                      All contracts
                    </Link>
                  </div>
                  <div className="w-full rounded-md bg-white px-3 py-1">
                    {contract.ContractID}
                  </div>
                  <select
                    className="w-full rounded-md"
                    onChange={() => console.log("I changed")}
                  >
                    {/*contracts.map((c, index) => (
                      <option key={index}>{c.ContractID}</option>
                    ))*/}
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center gap-6">
                  <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
                    <span className="text-agila">{client.FirstName}</span>
                    &apos;s cases
                  </h1>
                  <Table columns={casesColumns} data={casesData} />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-row items-center gap-6">
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
                      <span className="text-agila">{client.FirstName}</span>
                      &apos;s payments
                    </h1>
                    {session?.user.isAdmin && (
                      <Link
                        className="btn-blue"
                        href={`/payment/new/${client.ClientID}`}
                      >
                        <p>Add</p>
                      </Link>
                    )}
                  </div>
                  <Table columns={paymentsColumns} data={paymentsData} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = await prisma.client.findUnique({
    where: {
      ClientID: Number(params?.id),
    },
    include: {
      cases: true,
      payments: true,
      contracts: true,
    },
  });
  const contract = client
    ? await prisma.contract.findUnique({
        where: {
          ContractID: Number(client?.ContractID),
        },
      })
    : null;
  return {
    props: {
      client: JSON.parse(JSON.stringify(client)),
      contract: JSON.parse(JSON.stringify(contract)),
    },
  };
};
