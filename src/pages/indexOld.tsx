import Link from "next/link";

import Layout from "~/components/Layout";
import Head from "next/head";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const links = [
    {
      route: `/lawyer/${session?.user.id}`,
      text: "Access as lawyer",
      forClient: false,
      forLawyer: true,
      forAdmin: true,
    },
    {
      route: `/client/${session?.user.id}`,
      text: "Access as client",
      forClient: true,
      forLawyer: false,
      forAdmin: true,
    },
    {
      route: "/case/all",
      text: "Access as admin (all cases)",
      forClient: false,
      forLawyer: false,
      forAdmin: true,
    },
    {
      route: "/lawyer/all",
      text: "Access as admin (all lawyers)",
      forClient: false,
      forLawyer: false,
      forAdmin: true,
    },
    {
      route: "/client/all",
      text: "Access as admin (all clients)",
      forClient: false,
      forLawyer: false,
      forAdmin: true,
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
              Heffron <span className="text-agila">Cruz</span>
            </h1>
            <h2 className="text-2xl tracking-tight text-white sm:text-[1.5rem]">
              For the firm
            </h2>
            {session ? (
              <div className="flex flex-col justify-center gap-10">
                {links.map(
                  ({ route, text, forLawyer, forClient, forAdmin }, index) => {
                    if (
                      (forLawyer && session.user.isLawyer) ||
                      (forClient && session.user.isClient) ||
                      (forAdmin && session.user.isAdmin)
                    ) {
                      return (
                        <Link
                          key={index}
                          href={route}
                          className="z-10 flex h-full items-center justify-center rounded-lg bg-agila px-4 py-2 text-lg font-bold hover:bg-agila/80"
                        >
                          {text}
                        </Link>
                      );
                    }
                  },
                )}
              </div>
            ) : (
              <p className="text-xl text-white">Not logged in...</p>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
}
