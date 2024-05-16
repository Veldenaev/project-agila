import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import prisma from "~/lib/prisma";
import { type Client, type Case, type Payment } from "@prisma/client";
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
}

interface Row {
  name?: string;
  id: number;
  date?: string | null | Date;
  amt?: number;
}

export default function AllClients({ clients, cases, payments }: Props) {
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
        name: (client.LastName && client.FirstName) ? `${client.LastName}, ${client.FirstName} ${client.MiddleName ? client.MiddleName: ''}` : client.CompanyName ? client.CompanyName : 'No Name',
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

  const columnHelper = createColumnHelper<Row>();

  const clientColumns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        header: "Account Name",
      }),
    ];
  }, [columnHelper]);

  const caseColumns = useMemo(() => {
    return [
      columnHelper.accessor("name", {
        header: "Case Title",
      }),
    ];
  }, [columnHelper]);

  const payColumns = useMemo(() => {
    return [
      columnHelper.accessor("id", {
        header: "Payment Ref. No.",
        enableColumnFilter: false,
      }),
      columnHelper.accessor("amt", {
        header: "Amount",
      }),
      columnHelper.accessor("date", {
        header: "Date",
      }),
    ];
  }, [columnHelper]);

  if (session?.user.isClient === true) {
    return <Block />;
  }

  return (
    <>

      <Head>
        <title>All Clients</title>
      </Head>

      <Layout>
        <main className="flex justify-center min-h-screen">
          <div className="w-3/5 h-4/5 min-w-max z-10 my-auto flex flex-col items-center justify-center px-4 py-16">

            <div className="mb-8 flex flex-row items-center gap-6"> {/* Header Div */}

              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                Accounts
              </h1>

              {session?.user.isAdmin && (
                <Link className="btn-blue" href="/client/new/">
                  <p>Add</p>
                </Link>
              )}

            </div>

            <div className="h-80 w-full flex flex-row rounded-md bg-white p-1"> {/* Client Selector, Case Selector DIV */}
              <Selector
                data={clientData}
                columns={clientColumns}
                onRowSelect={setSelectedClientID}
                tailClass="flex flex-col flex-grow bg-white min-h-72 min-w-64 rounded-l-md items-center justify-between"
              />
              <table className="flex min-h-72 min-w-72 flex-col justify-center rounded-r-md pr-4 text-left">
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
                          className="ml-2 btn-blue"
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
              <div className="h-64 flex flex-row w-full mt-4 bg-white rounded-md justify-center"> {/* Payments Div */ }
                <Selector
                  selectorHighlight={false}
                  maxPageSize={3}
                  data={payData}
                  columns={payColumns}
                  tailClass="flex flex-col min-h-max flex-grow items-center justify-between"
                  onRowSelect={paySelect}
                />
                <div className="flex w-1/5 items-center justify-start">
                  <Link
                    className="btn-blue"
                    href={`/payment/new/${selectedClientID}`}
                  >
                    Add
                  </Link>
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
    | { Date?: string; PaymentID: number; ClientID: number; Amount: number }[] =
    [];

  if (session?.user.isAdmin) {
    clients = await prisma.client.findMany();
    cases = await prisma.case.findMany();
    payments = await prisma.payment.findMany();

    payments = payments.map((payment) => ({
      ...payment,
      Date: payment.Date?.toISOString(),
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
    clients = await prisma.client.findMany({
      where: {
        ClientID: {
          in: ClientIDs,
        },
      },
    });
  }

  return {
    props: { clients, cases, payments },
  };
};
