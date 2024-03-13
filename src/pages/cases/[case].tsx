import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

export default function Cases() {
  const router = useRouter();
  const cases = [
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
    {
      caseName: "turnabout",
      caseNum: 1,
      contractId: 1,
      clientId: 1,
      status: "hi",
      type: "hello",
      linkPath: "turnabout",
    },
  ];
  const title = `${router.query.case ?? "NA"}'s cases | Project Agila`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <h1 className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
          <span className="font-bold text-[hsl(280,100%,80%)]">
            {router.query.case}
          </span>
          &apos;s cases
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="transactions" className="flex h-full w-full flex-col gap-1">
            <h1 className="block p-1 text-center font-sans text-xl text-black">
              Cases
            </h1>

            <div className="border-gray h-60 w-full rounded-xl border-4">
              <table id="unsettled" className="w-full">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>Case Name</th>
                    <th>Case Number</th>
                    <th>Contract ID</th>
                    <th>Client ID</th>
                    <th>Status</th>
                    <th>Type</th>
                  </tr>
                  {cases.map((row, id) => (
                    <tr key={id} className="text-center">
                      <td>{id + 1}</td>
                      <td>{row.caseName}</td>
                      <td>{row.caseNum}</td>
                      <td>{row.contractId}</td>
                      <td>{row.clientId}</td>
                      <td>{row.status}</td>
                      <td>{row.type}</td>
                      <td>
                        <Link href={`/overviews/${row.linkPath}`}>
                          <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700">
                            Case Overview
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
