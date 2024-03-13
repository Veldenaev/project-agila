import Head from "next/head";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

export default function Accounts() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.account}&apos;s accounts | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <h1 className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
          <span className="font-bold text-[hsl(280,100%,80%)]">
            {router.query.account}
          </span>
          &apos;s accounts
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="accounts" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Accounts
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
          </div>
        </div>
      </main>
    </>
  );
}
