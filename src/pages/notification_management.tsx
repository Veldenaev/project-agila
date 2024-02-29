import Head from "next/head";

import Links from "../components/Links";
import Shadow from "../components/Shadow";

export default function NotificationManagement() {
  // Placeholder Data
  const notifications = [
    {
      id: 1,
      notificationTitle: "Lorem ipsum...",
      details: "Ipsum lorem...",
      lastUpdated: "2018-01-01",
      viewers: "Maya Fey, Miles Edgeworth",
      creator: "Admin",
    },
    {
      id: 2,
      notificationTitle: "Not again...",
      details: "What did you...",
      lastUpdated: "2017-12-31",
      viewers: "Maya Fey",
      creator: "Phoenix Wright",
    },
    {
      id: 3,
      notificationTitle: "Buy me a coffee",
      details: "I'm busy reading an autopsy report, so can you...",
      lastUpdated: "2017-12-30",
      viewers: "Detective Gumshoe",
      creator: "Miles Edgeworth",
    },
  ];

  return (
    <>
      <Head>
        <title>Notification Management | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      <main className="flex min-h-screen flex-col items-center">
        <Links />
        <table className="border-gray z-10 mb-auto mt-auto border-4 bg-white p-4">
          <caption className="z-10 mb-6 mt-4 mt-auto text-center font-sans text-2xl text-white">
            Notifications{" "}
            <span className="font-bold text-[hsl(280,100%,80%)]">(admin)</span>
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
                <td className="max-w-56 px-4 py-2">{notification.details}</td>
                <td className="px-4 py-2">{notification.lastUpdated}</td>
                <td className="px-4 py-2">{notification.viewers}</td>
                <td className="px-4 py-2">{notification.creator}</td>
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
