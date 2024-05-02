import Link from "next/link";

import Layout from "~/components/Layout";
import Head from "next/head";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const links = [
    {
      route: "/lawyer/1",
      text: "Access as lawyer",
    },
    {
      route: "/client/1",
      text: "Access as client",
    },
    {
      route: "/case/all",
      text: "Access as manager (all cases)",
    },
    {
      route: "/lawyer/all",
      text: "Access as manager (all lawyers)",
    },
    {
      route: "/client/all",
      text: "Access as manager (all clients)",
    },
  ];

  return (
    <>
      <Head>
        <title>Project Agila</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 mb-auto mt-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Project <span className="text-agila">Agila</span>
            </h1>
            <h2 className="text-2xl tracking-tight text-white sm:text-[1.5rem]">
              Empowering billings for the law industry.
            </h2>
            <div className="text-white">
              {session ? (
                <p>Logged in as {session.user.name}</p>
              ) : (
                <p>Not logged in</p>
              )}
            </div>
            <div className="flex flex-col justify-center gap-10">
              {links.map(({ route, text }, index) => (
                <Link
                  key={index}
                  href={route}
                  className="z-10 flex h-full items-center justify-center rounded-lg bg-agila px-4 py-2 text-lg font-bold hover:bg-agila/80"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
