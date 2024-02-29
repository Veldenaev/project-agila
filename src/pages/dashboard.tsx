import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function Dashboard() {
  const settledTransactions = [
    {
      title: "Turnabout Sisters",
      type: "Defense",
      lastUpdated: "September 9, 2016",
    },
    {
      title: "Reunion, and Turnabout",
      type: "Defense",
      lastUpdated: "June 22, 2017",
    },
  ];
  const unsettledTransactions = [
    {
      title: "Bridge to the Turnabout",
      type: "Defense",
      lastUpdated: "February 10, 2019",
    },
  ];
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
          Welcome,{" "}
          <span className="font-bold text-[hsl(280,100%,80%)]">Maya Fey</span>
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="transactions" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
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
                    {settledTransactions.map((row, id) => (
                      <tr key={id} className="text-center">
                        <td>{row.title}</td>
                        <td>{row.type}</td>
                        <td>{row.lastUpdated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
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
                    {unsettledTransactions.map((row, id) => (
                      <tr key={id} className="text-center">
                        <td>{row.title}</td>
                        <td>{row.type}</td>
                        <td>{row.lastUpdated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="notifications" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Notifications For All Clients
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4 p-3">
                <div className="mb-2 rounded-xl bg-violet-300/50 p-3">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia.
                </div>
                <div>– Admin</div>
              </div>
            </div>

            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Notifications For You
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4 p-3">
                <div className="mb-2 rounded-xl bg-violet-300/50 p-3">
                  What did you get yourself into this time?
                </div>
                <div>– Phoenix Wright</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
