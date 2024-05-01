import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Lawyer } from "@prisma/client";
import pingDelete from "~/utils/pingDelete";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  lawyers: Lawyer[];
}

interface Row {
  name: string;
  id: number;
}

export default function AllLawyers({ lawyers }: Props) {
  const router = useRouter();
  const data: Row[] = lawyers
    .map((lawyer) => ({
      name: `${lawyer.LastName}, ${lawyer.FirstName} ${lawyer.MiddleName}`,
      id: lawyer.LawyerID,
    }))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  const columnHelper = createColumnHelper<Row>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
    }),
    columnHelper.accessor("id", {
      header: "Lawyer ID",
      cell: (info) => (
        <div className="flex flex-row items-center justify-between">
          <p>{info.getValue()}</p>
          <div className="flex flex-row gap-1">
            <Link className="btn-blue" href={`/lawyer/${info.getValue()}`}>
              View
            </Link>
            <button
              className="btn-red"
              onClick={async () => {
                await pingDelete("lawyer", info.getValue());
                router.refresh();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
    }),
  ];
  return (
    <>
      <Head>
        <title>All Lawyers</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex flex-row items-center gap-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
                <span className="text-agila">All</span> lawyers
              </h1>
              <Link className="btn-blue" href="/lawyer/new/">
                <p>Add</p>
              </Link>
            </div>
            <MyTable data={data} columns={columns} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const lawyers = await prisma.lawyer.findMany();
  return {
    props: { lawyers },
  };
};
