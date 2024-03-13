import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function AccountManagement() {
  // Placeholder Data
  const Client = [
    {
      id: 1,
      LastName: "Smith",
      FirstName: "Lauren",
      MiddleName: "Regalia",
      Email: "slr@email.com",
      CellNum: "09170002222",
      TelNum: "000-0000",
      CityAdd: "Address 1",
      Remarks: "Remarks 1",
    },
    {
      id: 2,
      LastName: "Arele",
      FirstName: "Polius",
      MiddleName: "Garate",
      Email: "apg@email.com",
      CellNum: "09170001111",
      TelNum: "000-0001",
      CityAdd: "Address 2",
      Remarks: "Remarks 2",
    },
  ];
  const Lawyer = [
    {
      id: 1,
      LastName: "Sophia",
      FirstName: "John",
      MiddleName: "Johnson",
      Email: "sjj@email.com",
      CellNum: "09170003333",
      TelNum: "000-0002",
      CityAdd: "Address 3",
    },
    {
      id: 2,
      LastName: "Brown",
      FirstName: "Alexander",
      MiddleName: "Grace",
      Email: "bag@email.com",
      CellNum: "09170004444",
      TelNum: "000-0003",
      CityAdd: "Address 4",
    },
  ];
  return (
    <>
      <Head>
        <title>Account Management | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            Client Accounts{" "}
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Cellphone Number</th>
              <th className="px-4 py-2">Telephone Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Client.map((client) => (
              <tr key={client.id}>
                <td className="px-4 py-2">{client.LastName}</td>
                <td className="px-4 py-2">{client.FirstName}</td>
                <td className="px-4 py-2">{client.MiddleName}</td>
                <td className="px-4 py-2">{client.Email}</td>
                <td className="px-4 py-2">{client.CellNum}</td>
                <td className="px-4 py-2">{client.TelNum}</td>
                <td className="px-4 py-2">{client.CityAdd}</td>
                <td className="px-4 py-2">{client.Remarks}</td>
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

        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            Lawyer Accounts{" "}
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Cellphone Number</th>
              <th className="px-4 py-2">Telephone Number</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {Lawyer.map((lawyer) => (
              <tr key={lawyer.id}>
                <td className="px-4 py-2">{lawyer.LastName}</td>
                <td className="px-4 py-2">{lawyer.FirstName}</td>
                <td className="px-4 py-2">{lawyer.MiddleName}</td>
                <td className="px-4 py-2">{lawyer.Email}</td>
                <td className="px-4 py-2">{lawyer.CellNum}</td>
                <td className="px-4 py-2">{lawyer.TelNum}</td>
                <td className="px-4 py-2">{lawyer.CityAdd}</td>
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
