import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

import { allCases, allClients, allLawyers } from "../../utils/data";
import type { Client, Lawyer } from "../../utils/data";

function isLawyerFn(user: Client | Lawyer): user is Lawyer {
  return (user as Lawyer).isManager !== undefined;
}

export default function Cases() {
  const router = useRouter();
  const isLawyer = router.query.case && router.query.case[0] === "l";
  const c = router.query.case ?? "";
  const currUser: Lawyer | Client = isLawyer
    ? allLawyers.filter(
        (lawyer) => lawyer.lawyerId.toString() === c.slice(2),
      )[0] ?? allLawyers[0]!
    : allClients.filter(
        (client) => client.clientId.toString() === c.slice(2),
      )[0] ?? allLawyers[0]!;
  return (
    <>
      <Head>
        <title>Cases | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center gap-5">
        <Links />
        <h1 className="z-10 mt-auto text-center font-sans text-2xl text-white">
          {isLawyerFn(currUser) && currUser.isManager ? (
            <>
              Managing cases as{" "}
              <span className="font-bold text-[hsl(280,100%,80%)]">
                {currUser.firstName} {currUser.lastName}
              </span>
            </>
          ) : (
            <>
              <span className="font-bold text-[hsl(280,100%,80%)]">
                {currUser.firstName} {currUser.lastName}
              </span>
              &apos;s cases{" "}
            </>
          )}
        </h1>
        {(isLawyerFn(currUser) ? allClients : allLawyers).map(
          (client, id) =>
            ((isLawyerFn(currUser) && currUser.isManager) || id < 2) && (
              <div
                id="dashboard"
                key={id}
                className="border-gray z-10 flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-2"
              >
                <div
                  id="transactions"
                  className="flex h-full w-full flex-col gap-2"
                >
                  <h1 className="z-10 text-center font-sans text-2xl text-white">
                    {isLawyerFn(currUser) ? (
                      currUser.isManager ? (
                        ""
                      ) : (
                        <span className="text-black">for </span>
                      )
                    ) : (
                      <span className="text-black">under </span>
                    )}
                    <span className="font-bold text-black">
                      {client.firstName} {client.lastName}
                    </span>
                  </h1>
                  <div className="border-gray w-full rounded-xl border-4">
                    <table id="unsettled" className="w-full">
                      <tbody>
                        <tr>
                          <th>Case Name</th>
                          <th>Case Number</th>
                          <th>Contract ID</th>
                          <th>Client ID</th>
                          <th>Status</th>
                          <th>Type</th>
                          <th>Actions</th>
                        </tr>
                        {allCases.map((row, id) => (
                          <tr key={id} className="text-center">
                            <td>{row.title}</td>
                            <td>{row.caseNum}</td>
                            <td>{row.contractId}</td>
                            <td>{row.clientId}</td>
                            <td>{row.status}</td>
                            <td>{row.type}</td>
                            <td className="flex justify-center gap-2">
                              <Link href={`/overviews/${row.caseNum}`}>
                                <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700">
                                  See case overview
                                </button>
                              </Link>
                              {isLawyerFn(currUser) && currUser.isManager && (
                                <>
                                  <button className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-700">
                                    Edit
                                  </button>
                                  <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700">
                                    Delete
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ),
        )}
        <div className="mb-auto"></div>
      </main>
    </>
  );
}
