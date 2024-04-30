import Head from "next/head";

import Layout from "~/components/Layout";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Project Agila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <main className="flex min-h-screen flex-col items-center">
          <div className="z-10 mb-auto mt-auto flex flex-row items-center gap-16">
            <div className="flex flex-col items-center gap-12">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4rem]">
                <span className="text-agila">Agila</span> Law Offices
              </h1>
              <h2 className="text-2xl italic tracking-tight text-white sm:text-[1.5rem]">
                Be agile.
              </h2>
            </div>

            <div className="h- w-80 rounded bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">Login</h2>

              <form>
                <div className="mb-4 font-sans">
                  <label className="block text-sm font-medium text-gray-700">
                    username
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-violet-500 p-2 text-white transition-all hover:scale-105"
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
