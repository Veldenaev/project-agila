import Head from "next/head";

import Links from "../components/Links";

export default function TransactionManagement() {

  // Placeholder Data
  const transactions = [
    { id: 1, caseTitle: "Case 1", type: "Type 1", lastUpdated: "2024-02-28", client: "Client 1", appointedAttorney: "Attorney 1" },
    { id: 2, caseTitle: "Case 2", type: "Type 2", lastUpdated: "2024-02-27", client: "Client 2", appointedAttorney: "Attorney 2" },
    { id: 3, caseTitle: "Case 3", type: "Type 3", lastUpdated: "2024-02-26", client: "Client 3", appointedAttorney: "Attorney 3" }
  ];

  return (
    <>
      <Head>
        <title>Transaction Management | Project Agila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Links/>
        <table className="container mx-auto">
          <caption className="text-lg font-bold text-white py-2">Transactions</caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Case Title</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Last Updated</th>
              <th className="py-2 px-4">Client</th>
              <th className="py-2 px-4">Appointed Attorney</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className="py-2 px-4">{transaction.caseTitle}</td>
                <td className="py-2 px-4">{transaction.type}</td>
                <td className="py-2 px-4">{transaction.lastUpdated}</td>
                <td className="py-2 px-4">{transaction.client}</td>
                <td className="py-2 px-4">{transaction.appointedAttorney}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}


