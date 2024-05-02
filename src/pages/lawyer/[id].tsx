import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Lawyer, type Case, type Client } from "@prisma/client";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Layout from "~/components/Layout";
import Table from "~/components/Table";
import Form from "~/components/Form";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Block from "~/components/Block";

interface Props {
  lawyer: Lawyer & { cases: (Case & { client: Client })[] };
}

export default function Lawyer({ lawyer }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const { cases, ...obj } = lawyer;
  const data = cases;
  const columnHelper = createColumnHelper<Case>();
  const columns = [
    columnHelper.accessor("CaseNum", {
      cell: (info) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <p>{info.getValue()}</p>
          {session?.user.isAdmin && (
            <div className="flex flex-row gap-1">
              <Link className="btn-blue" href={`/case/${info.getValue()}`}>
                View
              </Link>
              <button
                className="btn-red"
                onClick={async () => {
                  await pingDelete("case", info.getValue());
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
    columnHelper.accessor("ContractID", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ClientID", {
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("Status", {
      header: "Status",
    }),
    columnHelper.accessor("Type", {
      header: "Type",
    }),
  ];

  if (session == null || Number(session.user.id) !== lawyer.LawyerID) {
    return <Block title="Lawyer Dashboard" />;
  }

  return (
    <>
      <Head>
        <title>Lawyer Dashboard</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
            <div className="flex flex-row gap-10">
              <Form
                obj={obj}
                type="lawyer"
                name="Lawyer"
                keys={["LawyerID"]}
                hide={["isManager", "pass"]}
                textarea={[]}
                identifier={(l: Lawyer) => l.LawyerID}
                adding={false}
                stay={true}
              />
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="flex flex-row items-center gap-6">
                  <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[2rem]">
                    <span className="text-agila">All</span> cases
                  </h1>
                  {/* <Link className="btn-blue" href="/case/new/"> */}
                  {/* <p>Add</p> */}
                  {/* </Link> */}
                </div>
                <Table columns={columns} data={data} />
              </div>
            </div>
          </div>
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
    include: {
      cases: {
        include: {
          client: true,
        },
      },
    },
  });
  return {
    props: { lawyer },
  };
};
