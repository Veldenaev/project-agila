import Head from "next/head";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

import { allCases } from "../../utils/data";
import type { Case } from "../../utils/data";

export default function Overviews() {
  const router = useRouter();
  const currCase: Case =
    allCases.filter((c) => c.caseNum.toString() === router.query.overview)[0] ??
    allCases[0]!;
  return (
    <>
      <Head>
        <title>Case Overview | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <h1 className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
          <span className="font-bold text-[hsl(280,100%,80%)]">
            {currCase.title}
          </span>{" "}
          overview
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-4/5 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="transactions" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Basic information
              </h1>

              <div className="border-gray flex h-60 w-full flex-col items-center justify-center gap-2 rounded-xl border-4 p-5">
                <div className="flex w-[50%] justify-between gap-2">
                  <div className="font-bold">Case Number</div>
                  <div>{currCase.caseNum}</div>
                </div>
                <div className="flex w-[50%] justify-between gap-2">
                  <div className="font-bold">Contract ID</div>
                  <div>{currCase.contractId}</div>
                </div>
                <div className="flex w-[50%] justify-between gap-2">
                  <div className="font-bold">Client ID</div>
                  <div>{currCase.clientId}</div>
                </div>
                <div className="flex w-[50%] justify-between gap-2">
                  <div className="font-bold">Status</div>
                  <div>{currCase.status}</div>
                </div>
                <div className="flex w-[50%] justify-between gap-2">
                  <div className="font-bold">Type</div>
                  <div>{currCase.type}</div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Description
              </h1>

              <div className="border-gray h-60 w-full rounded-xl border-4 p-5">
                <span className="font-bold">Bridge to the Turnabout</span> is
                the final episode in Phoenix Wright: Ace Attorney - Trials and
                Tribulations and the Phoenix Wright: Ace Attorney Trilogy. This
                episode acts as a final reunion of the main characters
                throughout the trilogy, as well as bringing closure to the
                overall story arc of the game itself.
              </div>
            </div>
          </div>

          <div id="notifications" className="flex h-full w-1/2 flex-col gap-2">
            <div>
              <h1 className="block p-1 text-center font-sans text-xl text-black">
                Billings
              </h1>

              <table className="border-gray z-10 mb-auto border-4 bg-white p-4 text-center w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2">Work</th>
                    <th className="px-4 py-2">Amount Due (Php)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Defense</td>
                    <td className="px-4 py-2">100000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Paperwork</td>
                    <td className="px-4 py-2">5000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Food</td>
                    <td className="px-4 py-2">2000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Drinks</td>
                    <td className="px-4 py-2">500</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Greed</td>
                    <td className="px-4 py-2">50000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Desire</td>
                    <td className="px-4 py-2">10000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 font-bold">Total</td>
                    <td className="px-4 py-2 font-bold">167500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
