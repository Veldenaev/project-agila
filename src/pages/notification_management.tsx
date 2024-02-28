import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function NotificationManagement() {
  // Placeholder Data
  const notifications = [
    {
      id: 1,
      notificationTitle: "Notification 1",
      details: "Detail 1",
      lastUpdated: "2024-02-28",
      viewers: "Client 1",
      creator: "Attorney 1",
    },
    {
      id: 2,
      notificationTitle: "Notification 2",
      details: "Detail 2",
      lastUpdated: "2024-02-27",
      viewers: "Client 2",
      creator: "Attorney 2",
    },
    {
      id: 3,
      notificationTitle: "Notification 3",
      details: "Detail 3",
      lastUpdated: "2024-02-26",
      viewers: "Client 3",
      creator: "Attorney 3",
    },
  ];

  return (
    <>
      <Head>
        <title>Notification Management | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">
        <Links />
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            Notifications
          </caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Notification Title</th>
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Last Updated</th>
              <th className="px-4 py-2">Viewed by</th>
              <th className="px-4 py-2">Created by</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id}>
                <td className="px-4 py-2">{notification.notificationTitle}</td>
                <td className="px-4 py-2">{notification.details}</td>
                <td className="px-4 py-2">{notification.lastUpdated}</td>
                <td className="px-4 py-2">{notification.viewers}</td>
                <td className="px-4 py-2">{notification.creator}</td>
                <td className="px-4 py-2">
                  <button className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                    Add
                  </button>
                  <button className="mr-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">
                    Delete
                  </button>
                  <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">
                    Edit
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
