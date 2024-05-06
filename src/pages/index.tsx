import Layout from "~/components/Layout";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {

  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    session?.user.isClient ? (
      router.push(`/client/${session?.user.id}`)
    ) : session?.user.isAdmin ? (
      router.push('/client/all')
    ) : session?.user.isLawyer ? (
      router.push(`/lawyer/${session?.user.id}`)
    ) : null;
    })

  return (
    <>
      <Head>
        <title>Login | Heffron Cruz</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout shadow={false}>
        <main className="flex min-h-screen flex-col items-center">
          <div className="z-10 mb-auto mt-auto flex flex-row items-center gap-16 p-8">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-5xl font-sans tracking-tight text-white sm:text-[4rem] text-center">
                <span className="text-7xl">H</span>EFFRON <span className="text-7xl">C</span>RUZ
              </h1>
              {/* <h2 className="text-2xl tracking-tight text-center text-white sm:text-[1.5rem]">
                Attorneys and Counsellors at Law
              </h2> */}
            </div>

            <div className="w-80 rounded bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">Login</h2>

              <form method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div className="mb-4 font-sans">
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                    <input
                      name="username"
                      type="text"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                    <input
                      name="password"
                      type="password"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-gray-900 p-2 text-white transition-all hover:scale-105"
                >
                  Login
                </button>
              </form>

              <p className="block pt-4 text-center font-sans text-xs">
                Forgot password? Contact your system administrator:
                admin@lawoffice.com
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

// This function is added at the end of your Login component file
export async function getServerSideProps(context) {
  return {
    props: {
      // Fetch the CSRF token from NextAuth
      csrfToken: await getCsrfToken(context),
    },
  };
}

