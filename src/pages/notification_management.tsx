import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function NotificationManagement() {

  // Placeholder Data
  const notifications = [
    { id: 1, notificationTitle: "Notification 1", details: "Detail 1", lastUpdated: "2024-02-28", viewers: "Client 1", creator: "Attorney 1" },
    { id: 2, notificationTitle: "Notification 2", details: "Detail 2", lastUpdated: "2024-02-27", viewers: "Client 2", creator: "Attorney 2" },
    { id: 3, notificationTitle: "Notification 3", details: "Detail 3", lastUpdated: "2024-02-26", viewers: "Client 3", creator: "Attorney 3" }
  ];

  return (
    <>
      <Head>
        <title>Notification Management | Project Agila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shadow/>
      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">
        <Links/>
        <table className="z-10 mt-auto mb-auto bg-white border-gray border-4 p-4">
          <caption className="mt-auto z-10 text-white font-sans text-center text-2xl mb-6 mt-4">Notifications</caption>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Notification Title</th>
              <th className="py-2 px-4">Details</th>
              <th className="py-2 px-4">Last Updated</th>
              <th className="py-2 px-4">Viewed by</th>
              <th className="py-2 px-4">Created by</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map(notification => (
              <tr key={notification.id}>
                <td className="py-2 px-4">{notification.notificationTitle}</td>
                <td className="py-2 px-4">{notification.details}</td>
                <td className="py-2 px-4">{notification.lastUpdated}</td>
                <td className="py-2 px-4">{notification.viewers}</td>
                <td className="py-2 px-4">{notification.creator}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  )
}

