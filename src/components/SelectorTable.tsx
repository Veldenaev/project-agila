import {
  type PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState, type Dispatch, type SetStateAction} from "react";
import Filter from "./Filter";

interface Props<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowSelect: Dispatch<SetStateAction<number | undefined>>;
  tailClass: string | undefined;
}

export default function Table<T>({ data, columns, onRowSelect, tailClass="flex flex-col bg-white min-w-64 rounded-md items-center" }: Props<T>) {

  const [selectedID, setSelectedID] = useState<number>(1)

  const handleSelect = (selectedRowID: number) => {
    setSelectedID(selectedRowID);
    onRowSelect(selectedRowID);
  }

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <>
    <div className={tailClass}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="p-2">
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} onClick={() => {handleSelect(row.original.id)}} className={`cursor-pointer ${selectedID === row.original.id ? 'bg-blue-200' : 'hover:bg-blue-50 transition-colors duration-75'}`}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="px-2 py-1">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      {data.length > 0 && (
        <div className="flex flex-col items-center gap-2 p-2">
          <div className="flex items-center gap-2">
            <button
              className="rounded border p-1"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="rounded border p-1"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1}
              </strong> of{" "}
              <strong>{table.getPageCount().toLocaleString()}</strong>
            </span>
            {/* <span className="flex items-center gap-1">
              | Go to page
              <input
                min={1}
                max={
                  (data.length + pagination.pageSize - 1) / pagination.pageSize
                }
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="w-16 rounded border p-1"
              />
            </span> */}
          </div>
          <div>
            Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
            {table.getRowCount().toLocaleString()} row(s)
          </div>
        </div>
      )}
    </div>
    </>
  );
}
