import Head from "next/head";

import Links from "../components/Links";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Project Agila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">

        <Links/>

        <h1 className="block text-white font-sans text-center text-2xl pb-4 mt-4">Welcome, Client Name</h1>

        <div id="dashboard" className="flex flex-row w-4/5 h-2/3 bg-white rounded-xl border-gray border-4 p-4 pt-0">

          <div id="transactions" className="flex flex-col w-1/2 h-full">

            <h1 className="block text-black font-sans text-center text-1xl p-1">Settled Transactions</h1>

            <div className="h-60 border-gray border-4 rounded-xl w-full">
            <table id="settled" className="w-full">
              <tbody>
              <tr>
                <th>Case Title</th>
                <th>Type</th>
                <th>Last Updated</th>
              </tr>
              </tbody>
            </table>
            </div>

            <h1 className="block text-black font-sans text-center text-1xl p-1">Unsettled Transactions</h1>

            <div className="h-60 border-gray border-4 rounded-xl w-full">
            <table id="unsettled" className="w-full">
              <tbody>
              <tr>
                <th>Case Title</th>
                <th>Type</th>
                <th>Last Updated</th>
              </tr>
              </tbody>
            </table>
            </div>

          </div>

          <div id="notifications" className="flex flex-col w-1/2 h-full">

            <h1 className="block text-black font-sans text-center text-1xl p-1">Notifications For All Clients</h1>

            <div className="h-60 border-gray border-4 rounded-xl w-full">
            <table id="settled" className="w-full">
            </table>
            </div>

            <h1 className="block text-black font-sans text-center text-1xl p-1">Notifications For You</h1>

            <div className="h-60 border-gray border-4 rounded-xl w-full">
            <table id="unsettled" className="w-full">
            </table>
            </div>

          </div>

        </div>

      </main>
    </>
  )
}
