import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">
        <Links />

        <h1 className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
          Welcome, Client Name
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="transactions" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="text-1xl block p-1 text-center font-sans text-black">
                Settled Transactions
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4">
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
            </div>

            <div>
              <h1 className="text-1xl block p-1 text-center font-sans text-black">
                Unsettled Transactions
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4">
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
          </div>

          <div id="notifications" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="text-1xl block p-1 text-center font-sans text-black">
                Notifications For All Clients
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="settled" className="w-full"></table>
              </div>
            </div>

            <div>
              <h1 className="text-1xl block p-1 text-center font-sans text-black">
                Notifications For You
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="unsettled" className="w-full"></table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
