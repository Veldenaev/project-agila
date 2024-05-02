import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Client, type Case, type Payment } from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Shadow from "~/components/Shadow";
import Table from "~/components/Table";
import Form from "~/components/Form";

interface Props {
  client: Client & { cases: Case[]; payments: Payment[] };
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

export default function Client({ client }: Props) {
  const casesData: CaseRow[] = client.cases.map((c) => ({
    num: c.CaseNum,
    status: c.Status,
    type: c.Type,
  }));
  const casesColumnHelper = createColumnHelper<CaseRow>();
  const casesColumns = [
    casesColumnHelper.accessor("num", {
      header: "Case Number",
      cell: (info) => info.getValue(),
    }),
    casesColumnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    casesColumnHelper.accessor("type", {
      header: "Type",
      cell: (info) => info.renderValue(),
    }),
    casesColumnHelper.accessor("num", {
      header: "Actions",
      cell: (info) => (
        <div className="flex flex-row gap-1">
          <button className="btn-blue">
            <a href={`/case/${info.renderValue() ?? -1}`}>View</a>
          </button>
        </div>
      ),
      enableSorting: false,
      enableColumnFilter: false,
    }),
  ];
  const paymentsData: PaymentRow[] = client.payments.map((payment) => ({
    refNum: payment.PaymentID,
    amount: payment.Amount,
    date: payment.Date,
  }));
  const paymentsColumnHelper = createColumnHelper<PaymentRow>();
  const paymentsColumns = [
    paymentsColumnHelper.accessor("refNum", {
      header: "Reference Number",
      cell: (info) => info.getValue(),
    }),
    paymentsColumnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
    }),
    paymentsColumnHelper.accessor("date", {
      header: "Date",
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <Head>
        <title>Client Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col">
        <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-row gap-6">
            <Form
              obj={client}
              type="client"
              name="Client"
              p_keys={["ClientID", "ContractID"]}
              hide={["pass", "cases", "payments"]}
              id_func={(c: Client) => c.ClientID}
            />
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]">
                  <span className="text-agila">{client.FirstName}</span>
                  &apos;s cases
                </h1>
                <Table columns={casesColumns} data={casesData} />
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]">
                  <span className="text-agila">{client.FirstName}</span>
                  &apos;s payments
                </h1>
                <Table columns={paymentsColumns} data={paymentsData} />
              </div>
            </div>
          </div>
        </div>
      </main>
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
    },
  });
  return {
    props: { client: JSON.parse(JSON.stringify(client)) },
  };
};
