import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function TransactionManagement() {
  // Placeholder Data
  const transactions = [
    {
      id: 1,
      caseTitle: "Case 1",
      type: "Type 1",
      lastUpdated: "2024-02-28",
      client: "Client 1",
      appointedAttorney: "Attorney 1",
    },
    {
      id: 2,
      caseTitle: "Case 2",
      type: "Type 2",
      lastUpdated: "2024-02-27",
      client: "Client 2",
      appointedAttorney: "Attorney 2",
    },
    {
      id: 3,
      caseTitle: "Case 3",
      type: "Type 3",
      lastUpdated: "2024-02-26",
      client: "Client 3",
      appointedAttorney: "Attorney 3",
    },
  ];

  return (
    <>
      <Head>
        <title>Transaction Management | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">
        <Links />
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            Transactions
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Case Title</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Last Updated</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Appointed Attorney</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-2">{transaction.caseTitle}</td>
                <td className="px-4 py-2">{transaction.type}</td>
                <td className="px-4 py-2">{transaction.lastUpdated}</td>
                <td className="px-4 py-2">{transaction.client}</td>
                <td className="px-4 py-2">{transaction.appointedAttorney}</td>
                <td className="px-4 py-2">
                  <button className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                    Add
                  </button>
                  <button className="mr-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                    Delete
                  </button>
                  <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
