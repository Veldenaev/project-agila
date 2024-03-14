import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Links from "../../components/Links";
import Shadow from "../../components/Shadow";

export default function Accounts() {
  const router = useRouter();
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
      Case: "turnabout",
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
      Case: "turnabout",
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
      Case: "turnabout",
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
      Case: "turnabout",
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
      Case: "turnabout",
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
      Case: "turnabout",
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
      Case: "turnabout",
    },
  ];
  const title = `${router.query.account ?? "<>"}'s accounts | Project Agila`;
  return (
    <>
      <Head>
        <title>{title}</title>
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
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
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
              <th className="px-4 py-2">Actions</th>
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
                  <Link href={`/cases/${client.Case}`}>
                    <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"></button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
