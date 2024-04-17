import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function Dashboard() {
  const Client = [
    {
      
    }
  ];
  const Case = [
    {
      
    },
  ];
  const Work = [
    {

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
            Administrator Name
          </span>
        </h1>

        <div
          id="dashboard"
          className="border-gray z-10 mb-auto flex h-2/3 w-5/6 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="Selection" className="flex h-full w-2/5 flex-col gap-2">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="block p-1 text-center font-sans text-xl text-black">
                  Client List
                  </h1>
                <button className="rounded bg-green-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Add</button>
              </div>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="Client" className="w-full">
                  <tbody>
                    <tr>
                      <th>Client ID</th>
                      <th>Surname</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
              <div className="flex items-center justify-between">
                <h1 className="block p-1 text-center font-sans text-xl text-black">
                  Cases for{" "}
                  <span className="text-purple-600">Selected Client</span>
                </h1>
                <button className="rounded bg-green-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Add</button>
              </div>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="Case" className="w-full">
                  <tbody>
                    <tr>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            </div>
          </div>

          <div id="SelectionInfo" className="flex h-full w-3/5 flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div id="SelectedClient" className="flex h-full w-1/2 flex-col gap-2">
                <div className="border-gray h-60 w-full box-xl border-2">
                  <div className="flex items-center justify-between">
                    <h2 className="block p-1 text-center text-x0.5 text-black">
                      Client Details
                    </h2>
                    <div>
                      <button className="rounded bg-yellow-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Edit</button>
                      <button className="rounded bg-red-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Delete</button>
                    </div>
                  </div>
                  <tbody>
                    <tr>
                      <td><strong>Client ID:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Complete Name:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Email:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Cellphone Number:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Telephone Number:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Address:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Remarks:</strong></td>
                      <td></td>
                    </tr>
                    </tbody>
                </div>
              </div>
              <div id="SelectedCase" className="flex h-full w-1/2 flex-col gap-2">
                <div className="border-gray h-60 w-full box-xl border-2">
                  <div className="flex items-center justify-between">
                    <h2 className="block p-1 text-center text-x0.5 text-black">
                      Case Details
                    </h2>
                    <div>
                      <button className="rounded bg-yellow-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Edit</button>
                      <button className="rounded bg-red-500 px-4 py-1 font-bold text-white hover:bg-yellow-700">Delete</button>
                    </div>
                  </div>
                  <tbody>
                    <tr>
                      <td><strong>Case Title:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Case Number:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Contract Type:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Contract ID:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Case Type:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Assigned Lawyer:</strong></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><strong>Status:</strong></td>
                      <td></td>
                    </tr>
                    </tbody>
                </div>
              </div>
          </div>
          <div className="flex items-center justify-between">
                <h1 className="block p-1 text-center font-sans text-xl text-black">
                  Works for{" "}
                  <span className="text-red-600">Selected Case</span>
                  </h1>
                <div>
                <button className="rounded bg-green-500 px-4 py-1 font-bold text-white">Add</button>
                <button className="rounded bg-yellow-500 px-4 py-1 font-bold text-white">Edit</button>
                <button className="rounded bg-red-500 px-4 py-1 font-bold text-white">Delete</button>
                </div>
              </div>

              <div className="border-gray h-60 w-full rounded-xl border-4">
                <table id="Client" className="w-full">
                  <tbody>
                    <tr>
                      <th>Work ID</th>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Location</th>
                      <th>Filename</th>
                      <th>Fee</th>
                      <th>Remarks</th>
                      
                      
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
