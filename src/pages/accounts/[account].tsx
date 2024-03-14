import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

import {
  allClients,
  allCases,
  allLawyers,
  allCaseAssignments,
} from "../../utils/data";
import type { Client, Lawyer } from "../../utils/data";

export default function Accounts() {
  const router = useRouter();
  const currLawyer: Lawyer =
    allLawyers.filter(
      (lawyer) => lawyer.lawyerId.toString() === router.query.account,
    )[0] ?? allLawyers[0]!;
  const toShow: Client[] = allClients;
  // const toShow = allCaseAssignments
  //   .filter(
  //     (caseAssignment) =>
  //       caseAssignment.lawyerId === router.query.account.toString(),
  //   )
  //   .map((caseAssignment) =>
  //     allCases.filter((c) => c.caseNum == caseAssignment.caseNum),
  //   );
  return (
    <>
      <Head>
        <title>Accounts | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <h1 className="z-10 mb-6 mt-auto text-center font-sans text-2xl text-white">
          {currLawyer.isManager ? (
            <>
              Managing accounts as{" "}
              <span className="font-bold text-[hsl(280,100%,80%)]">
                {currLawyer.firstName} {currLawyer.lastName}
              </span>
            </>
          ) : (
            <>
              <span className="font-bold text-[hsl(280,100%,80%)]">
                {currLawyer.firstName} {currLawyer.lastName}
              </span>
              &apos;s accounts
            </>
          )}
        </h1>
        <table className="border-gray z-10 mb-auto border-4 bg-white p-4">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Cellphone Number</th>
              <th className="px-4 py-2">Telephone Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Remarks</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toShow.map(
              (client, index) =>
                (currLawyer.isManager || index < 2) && (
                  <tr key={client.clientId}>
                    <td className="px-4 py-2">
                      {client.firstName} {client.lastName}
                    </td>
                    <td className="px-4 py-2">{client.email}</td>
                    <td className="px-4 py-2">{client.cellNum}</td>
                    <td className="px-4 py-2">{client.telNum}</td>
                    <td className="px-4 py-2">{client.cityAdd}</td>
                    <td className="px-4 py-2">{client.remarks}</td>
                    <td className="flex gap-2 px-4 py-2">
                      <Link
                        href={`/cases/${currLawyer.isManager ? `c_${client.clientId}` : `l_${currLawyer.lawyerId}`}`}
                      >
                        <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700">
                          View cases
                        </button>
                      </Link>
                      {currLawyer.isManager && (
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
                ),
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}
