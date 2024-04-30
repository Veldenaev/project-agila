import { createColumnHelper } from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MyTable from "~/components/Table";
import prisma from "~/lib/prisma";
import { type Lawyer } from "~/utils/types";

async function deleteLawyer(id: number): Promise<void> {
  await fetch(`/api/lawyer/${id}`, {
    method: "DELETE",
  });
}

interface Props {
  lawyers: Lawyer[];
}

interface Row {
	name: string;
	id: number;
}

export default function AllLawyers({ lawyers }: Props) {
  const data: Row[] = lawyers.map(lawyer => ({
		name: `${lawyer.LastName}, ${lawyer.FirstName} ${lawyer.MiddleName}`,
		id: lawyer.LawyerID
	}));
  const columnHelper = createColumnHelper<Row>();
  const columns = [
		columnHelper.accessor("name", {
			header: "Name",
		}),
    columnHelper.accessor("id", {
      header: "Lawyer ID",
    }),
    columnHelper.accessor("id", {
      header: "Actions",
      cell: (info) => (
        <div className="flex flex-row gap-1">
          <button className="btn-blue">
            <a href={`/lawyer/${info.renderValue() ?? -1}`}>View</a>
          </button>
          <button className="btn-yellow">
            <a href={`/lawyer/update/${info.renderValue() ?? -1}`}>Update</a>
          </button>
        </div>
      ),
      enableSorting: false,
      enableColumnFilter: false,
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
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
              <span className="text-agila">All</span> lawyers
            </h1>
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
