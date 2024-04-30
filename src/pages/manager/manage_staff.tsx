import Link from "next/link";
import Head from "next/head";
import Layout from "~/components/Layout";

export default function Manage_Staff() {
  const links = [
    {
      route: "/manager/manage_staff",
      text: "Manage Staff",
    },
    {
      route: "/manager/manage_client",
      text: "Manage Client and Cases",
    },
    {
      route: "/",
      text: "Return to Main Page (Temporary Button)",
    },
  ];
  return (
    <>
      <Head>
        <title>Staff | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
      <Layout/>
      <h1 className="z-10 mb-6 mt-10 mt-auto text-center font-sans text-2xl text-white">
          Welcome,{" "}
          <span className="font-bold text-[hsl(280,100%,80%)]">
            Manager Name
          </span>
        </h1>

        <div
          id="manage_lawyers"
          className="border-gray z-10 mb-auto flex h-2/3 w-5/6 flex-row gap-5 rounded-xl border-4 bg-white p-4 pt-0"
        >
          <div id="Selection" className="flex h-full w-2/5 flex-col gap-2">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="block p-1 text-center font-sans text-xl text-black">
                  Lawyers
                  </h1>
                <div>
                <button className="rounded bg-green-500 px-4 py-1 font-bold text-white">Add</button>
                <button className="rounded bg-red-500 px-4 py-1 font-bold text-white">Delete</button>
                </div>
              </div>
              <div className="border-gray h-full w-full rounded-xl border-4">
                <table id="Client">
                  <tbody>
                    <tr>
                      <th className="py-2 px-4">Surname</th>
                      <th className="py-2 px-4">First Name</th>
                      <th className="py-2 px-4">Middle Name</th>
                      <th className="py-2 px-4">ID</th>
                    </tr>
                  </tbody>
                </table>
              
            </div>

            </div>
          </div>

          <div id="SelectionInfo" className="flex h-full w-3/5 flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div id="ManagerDetails" className="flex h-full w-full flex-col gap-2">
                <div className="border-white h-60 w-full box-xl border-2">
                  <div className="flex items-center justify-between">
                    <h2 className="block p-1 text-center text-x0.5 text-black">
                      Lawyer Details
                    </h2>
                    <div>
                      <button className="block rounded bg-green-500 px-5 py-2 font-bold text-white hover:bg-yellow-700">Confirm Edit</button>
                    </div>
                  </div>
                  <div className="items-center justify-between border-white h-full w-full rounded-xl">
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>First Name:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">First Name</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter First Name" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Last Name:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Surname</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Surname" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Middle Name:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Middle Name</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Middle Name" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Email:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Email@domain.com</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Email" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Alternative Email:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">email2@domain2.com</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Alt. Email" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Cellphone #:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Manager's Cellphone</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Cellphone Number" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Telephone #:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Manager's Telephone</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Telephone Number" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Address:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Manager's Address</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Address" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Username:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">Manager's Username</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Username" /></td>
                        </tr>
                        <tr>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><strong>Password:</strong></td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4">*********</td>
                          <td className="border-white h-full w-1/3 rounded-x1 border-4"><input type="text" placeholder="Enter Password" /></td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              </div>
          </div>
          <div className="flex items-center justify-between">
              </div>

              <div className="border-white h-60 w-full rounded-xl border-4">
                <table id="placeholder" className="w-full">
                  <tbody>
                    <tr>
                      
                      
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
