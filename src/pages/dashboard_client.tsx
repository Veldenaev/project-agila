import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function Dashboard() {
  const Case = [
    {
      CaseNum: "CaseNum1",
      ContractID: "ContractID1",
      Status: "Active",
      Type: "Defense",
    },
    {
      CaseNum: "CaseNum2",
      ContractID: "ContractID2",
      Status: "Active",
      Type: "Prosecution",
    },
  ];
  const Work = [
    {
      WorkID: "00101",
      Type: "Appeal",
      Date: "01/02/24",
    },
  ];
  return (
    <>
      <Head>
        <title>Dashboard | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />

        <h1 className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
          Welcome,{" "}
          <span className="font-bold text-[hsl(280,100%,80%)]">
            Client Name
          </span>
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="caselist" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Your Cases
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="Case" className="w-full">
                  <tbody>
                    <tr>
                      <th>Case Number</th>
                      <th>Contract ID</th>
                      <th>Status</th>
                      <th>Type</th>
                    </tr>
                    {Case.map((row, id) => (
                      <tr key={id} className="text-center">
                        <td>{row.CaseNum}</td>
                        <td>{row.ContractID}</td>
                        <td>{row.Status}</td>
                        <td>{row.Type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="clientinfo" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Work for <span className="text-red-600">Case Number</span>
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4 p-3">
                <table id="Work" className="w-full">
                  <tbody>
                    <tr>
                      <th>Work ID</th>
                      <th>Type</th>
                      <th>Date</th>
                    </tr>
                    {Work.map((row, id) => (
                      <tr key={id} className="text-center">
                        <td>{row.WorkID}</td>
                        <td>{row.Type}</td>
                        <td>{row.Date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
