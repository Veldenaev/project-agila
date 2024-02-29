import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function TransactionManagement() {
  // Placeholder Data
  const transactions = [
    {
      id: 1,
      caseTitle: "The First Turnabout",
      type: "Defense",
      lastUpdated: "2016-08-03",
      client: "Larry Butz",
    },
    {
      id: 2,
      caseTitle: "Turnabout Sisters",
      type: "Defense",
      lastUpdated: "2016-09-09",
      client: "Maya Fey",
    },
    {
      id: 3,
      caseTitle: "Turnabout Samurai",
      type: "Defense",
      lastUpdated: "2016-01-20",
      client: "Will Powers",
    },
    {
      id: 4,
      caseTitle: "Rise from the Ashes",
      type: "Defense",
      lastUpdated: "2017-02-25",
      client: "Lana Skye",
    },
    {
      id: 5,
      caseTitle: "Turnabout Big Top",
      type: "Defense",
      lastUpdated: "2017-12-30",
      client: "Max Galactica",
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
            <span className="font-bold text-[hsl(280,100%,80%)]">
              Phoenix Wright
            </span>
            's Transactions
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Case Title</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Last Updated</th>
              <th className="px-4 py-2">Client</th>
              {/*<th className="px-4 py-2">Appointed Attorney</th>*/}
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
                {/*<td className="px-4 py-2">{transaction.appointedAttorney}</td>*/}
                <td className="px-4 py-2 flex gap-2">
                  {/*<button className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                    Add
                  </button>*/}
                  <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                    Edit
                  </button>
                  <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                    Delete
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
