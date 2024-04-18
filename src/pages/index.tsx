// import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import Layout from "~/components/Layout";
import Head from "next/head";

// import { api } from "~/utils/api";

export default function Home() {
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

// function AuthShowcase() {
//   const { data: sessionData } = useSession();
//
//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );
//
//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
