import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function CaseManagement() {
  // Placeholder Data
  const cases = [
    {
      id: 1,
      CaseNum: "000001",
      ContractID: "Contract 1",
      ClientID: "00001",
      Status: "Active",
      Type: "Prosecution",
    },
    {
      id: 2,
      CaseNum: "000002",
      ContractID: "Contract 2",
      ClientID: "00001",
      Status: "Active",
      Type: "Defense",
    },
    {
      id: 3,
      CaseNum: "000003",
      ContractID: "Contract 2",
      ClientID: "00002",
      Status: "Active",
      Type: "Defense",
    },
  ];

  return (
    <>
      <Head>
        <title>Case Management | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            <span className="font-bold text-[hsl(280,100%,80%)]">
              Phoenix Wright
            </span>
            &apos;s Cases
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Case Number</th>
              <th className="px-4 py-2">Contract ID</th>
              <th className="px-4 py-2">Client ID</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((thiscase) => (
              <tr key={thiscase.id}>
                <td className="px-4 py-2">{thiscase.CaseNum}</td>
                <td className="px-4 py-2">{thiscase.ContractID}</td>
                <td className="px-4 py-2">{thiscase.ClientID}</td>
                <td className="px-4 py-2">{thiscase.Status}</td>
                <td className="px-4 py-2">{thiscase.Type}</td>
                <td className="flex gap-2 px-4 py-2">
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
