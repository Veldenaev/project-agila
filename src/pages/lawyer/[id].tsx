import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { type GetServerSideProps } from "next";
import { type Case } from "~/utils/types";
import Head from "next/head";
import prisma from "../../lib/prisma";
import Shadow from "~/components/Shadow";

interface Props {
  cases: Case[];
}

export default function Lawyer({ cases }: Props) {
  const data = cases;
  const columnHelper = createColumnHelper<Case>();
  const columns = [
    columnHelper.accessor("CaseNum", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("ContractID", {
      header: () => <span>Contract ID</span>,
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("ClientID", {
      header: () => "Client ID",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("Status", {
      header: "Status",
    }),
    columnHelper.accessor("Type", {
      header: "Type",
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Head>
        <title>Hi&apos;s Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col">
        <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[3rem]">
            Your cases
          </h1>
          <table className="rounded-md bg-white">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-3 py-1">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3 py-1">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const cases = await prisma.cases.findMany({
    where: {
      CaseNum: String(params?.id),
    },
  });
  return {
    props: { cases },
  };
};
