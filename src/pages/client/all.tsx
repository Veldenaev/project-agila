import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import prisma from "~/lib/prisma";
import { type Client, type Case, type Payment, type Work } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState, useMemo } from "react";
import Block from "~/components/Block";
import { getSession } from "next-auth/react";
import Selector from "~/components/SelectorTable";

interface Props {
  clients: Client[];
  cases: Case[];
  payments: Payment[];
  works: Work[]
}

interface Row {
  name?: string;
  id: number | string;
  date?: string | null | Date;
  amt?: number;
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

function sumNumbers(numbers: (number | null)[]): number {
  return numbers.reduce((acc, current) => (acc ?? 0) + (current ?? 0), 0) ?? 0;
}

export default function AllClients({ clients, cases, payments, works }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedClientID, setSelectedClientID] = useState<number>();

  useEffect(() => {
    !session ? router.push("/rerouter") : null;
  });

  const caseSelect = (caseNum: number) => {
    router.push(`/case/${caseNum}`);
  };

  const paySelect = (payID: number) => {
    router.push(`/payment/${payID}`);
  };

  const selectedClient: Client | undefined = useMemo(() => {
    return clients.find(
      (clientSelect) => clientSelect.ClientID === selectedClientID,
    );
  }, [selectedClientID, clients]);

  const clientData: Row[] = useMemo(() => {
    return clients
      .map((client) => ({
        name:
          client.LastName && client.FirstName
            ? `${client.LastName}, ${client.FirstName} ${client.MiddleName ? client.MiddleName : ""}`
            : client.CompanyName
              ? client.CompanyName
              : "No Name",
        id: client.ClientID,
      }))
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  }, [clients]);

  const caseData: Row[] = useMemo(() => {
    return cases
      .filter((c) => c.ClientID == selectedClientID)
      .map((c) => ({
        name: c.Title ? c.Title : c.CaseNum,
        id: parseInt(c.CaseNum),
      }))
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  }, [cases, selectedClientID]);

  const payData: Row[] = useMemo(() => {
    return payments
      .filter((p) => p.ClientID == selectedClientID)
      .map((p) => ({
        amt: p.Amount,
        date: p.Date
          ? new Date(p.Date).toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })
          : "No Date",
        id: p.PaymentID,
      }))
      .sort((a, b) => (a.amt > b.amt ? 1 : b.amt > a.amt ? -1 : 0));
  }, [selectedClientID, payments]);

  const workTotal: number = useMemo(() => {
      const selectedCases = cases
      .filter((c) => c.ClientID == selectedClientID).map((c) => c.CaseNum);
      const selectedWorks = works.filter((w) => selectedCases.includes(w.CaseNum)).map((w) => w.FeeAmt);
      const total = sumNumbers(selectedWorks);
      return total
  }, [works, cases, selectedClientID]);

  const payTotal: number = useMemo(() => {
    const selectedPayments = payments
      .filter((p) => p.ClientID == selectedClientID)
      .map((p) =>  p.Amount)
    const total = sumNumbers(selectedPayments)
    return total
  }, [selectedClientID, payments]);

  const columnHelper = createColumnHelper<Row>();

  const clientColumns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        header: "Account Name",
      }),
    ];
  }, []);

  const caseColumns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        header: "Case Title",
      }),
    ];
  }, []);

  const payColumns = useMemo(() => {
    return [
      columnHelper.accessor("id", {
        header: "Ref. No.",
      }),
      columnHelper.accessor("amt", {
        header: "Amount",
        cell: (info) => formatNumber(info.getValue() ?? 0),
      }),
      columnHelper.accessor("date", {
        header: "Date",
      }),
    ];
  }, []);

  if (session?.user.isClient === true) {
    return <Block />;
  }

  return (
    <>
      <Head>
        <title>All Clients</title>
      </Head>

      <Layout>
        <main className="flex min-h-screen justify-center">
          <div className="z-10 my-auto flex h-4/5 w-3/5 min-w-max flex-col items-center justify-center px-4 py-16">
            <div className="mb-8 flex flex-row items-center gap-6">
              {" "}
              {/* Header Div */}
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                Accounts
              </h1>
              {session?.user.isAdmin && (
                <Link className="btn-blue" href="/client/new/">
                  <p>Add</p>
                </Link>
              )}
            </div>

            <div className="flex h-80 w-full flex-row rounded-md bg-white p-1">
              {" "}
              {/* Client Selector, Case Selector DIV */}
              <Selector
                data={clientData}
                columns={clientColumns}
                onRowSelect={setSelectedClientID}
                tailClass="flex flex-col flex-grow bg-white min-h-72 min-w-64 rounded-l-md items-center justify-between"
              />
              <table className="flex bg-gray-300 min-h-72 min-w-96 gap-1 flex-col justify-center rounded-md px-4 text-left">
                <thead className="text-2xl">
                  <tr>
                    <th>
                      {selectedClient
                        ? `${selectedClient?.LastName}, ${selectedClient?.FirstName} ${selectedClient?.MiddleName}`
                        : "Select an account"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-xl">
                      {selectedClient?.CityAdd
                        ? `${selectedClient?.CityAdd}`
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {selectedClient?.TelNum
                        ? `${selectedClient?.TelNum}`
                        : ""}
                      {selectedClient?.TelNum && selectedClient?.CellNum
                        ? " | "
                        : ""}
                      {selectedClient?.CellNum
                        ? `${selectedClient?.CellNum}`
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {selectedClient?.Email ? `${selectedClient?.Email}` : ""}
                    </td>
                  </tr>
                  <tr>
                    {session?.user.isAdmin &&
                    selectedClient &&
                    selectedClientID ? (
                      <div className="mt-2">
                        <Link
                          href={`/client/${selectedClientID}`}
                          className="btn-blue"
                        >
                          View
                        </Link>

                        <Link
                          href={`/case/new/${selectedClientID}`}
                          className="btn-blue ml-2"
                        >
                          Add Case
                        </Link>
                      </div>
                    ) : null}
                  </tr>
                </tbody>
              </table>
              <Selector
                selectorHighlight={false}
                data={caseData}
                columns={caseColumns}
                onRowSelect={caseSelect}
                tailClass="flex flex-col flex-grow bg-white min-h-72 min-w-64 rounded-l-md items-center justify-between"
              />
            </div>

            {session?.user.isAdmin ? (
              <div className="mt-4 flex h-64 w-full flex-row justify-center rounded-md bg-white">
                {" "}
                {/* Payments Div */}
                <Selector
                  selectorHighlight={false}
                  maxPageSize={3}
                  data={payData}
                  columns={payColumns}
                  tailClass="flex flex-col min-h-max items-center justify-between w-2/3"
                  onRowSelect={paySelect}
                  columnBorder={true}
                />
                <div className="flex flex-col flex-grow items-start gap-4 justify-center">
                  <Link
                    className="btn-blue"
                    href={`/payment/new/${selectedClientID}`}
                  >
                    Add Payment
                  </Link>

                  <table>
                    <tbody>
                      <tr>
                        <td className="pr-4 text-red-600">Billings:</td>
                        <td className="pl-2 border-l text-red-600">{formatNumber(workTotal)}</td>
                      </tr>
                      <tr>
                        <td className="pr-4 text-green-400">Payments:</td>
                        <td className="pl-2 border-l text-green-400">{formatNumber(payTotal)}</td>
                      </tr>
                      <tr>
                        <td className="pt-2 font-bold pr-4 border-t text-blue-600 text-2xl">Balance:</td>
                        <td className="pt-2 pl-2 border-l border-t text-blue-600 text-3xl">{formatNumber(workTotal - payTotal)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  let clients: Client[] = [];
  let cases: Case[] = [];
  let payments:
    | Payment[]
    | { Date?: string; PaymentID: string; ClientID: number; Amount: number }[] =
    [];
  let works: Work[] | { Date: string | undefined; WorkID: number; CaseNum: string; Type: string | null; Remarks: string | null; location: string | null; filename: string | null; Title: string | null; FeeAmt: number | null; }[] = [];

  if (session?.user.isAdmin) {
    clients = await prisma.client.findMany();
    cases = await prisma.case.findMany();
    payments = await prisma.payment.findMany();
    works = await prisma.work.findMany();

    payments = payments.map((payment) => ({
      ...payment,
      Date: payment.Date?.toISOString(),
      PaymentID: payment.PaymentID.toString(),
    }));

    works = works.map((work) => ({
      ...work,
      Date: work.Date?.toISOString(),
    }));

  } else if (session?.user.isLawyer) {
    cases = await prisma.case.findMany({
      include: {
        lawyers: true,
      },
      where: {
        lawyers: {
          some: {
            LawyerID: parseInt(session.user.id),
          },
        },
      },
    });

    const ClientIDs = cases.map((caseInstance) => caseInstance.ClientID);
    const CaseNums = cases.map((caseInstance) => caseInstance.CaseNum);
    clients = await prisma.client.findMany({
      where: {
        ClientID: {
          in: ClientIDs,
        },
      },
    });
    works = await prisma.work.findMany({
      where: {
        CaseNum: {
          in: CaseNums,
        },
      },
    });
    works = works.map((work) => ({
      ...work,
      Date: work.Date?.toISOString(),
    }));
  }



  return {
    props: { clients, cases, payments, works },
  };
};
