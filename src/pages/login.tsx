import Head from "next/head";

import Links from "../components/Links";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Project Agila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Links/>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Login</h1>
        </div>
      </main>
    </>
  )
}

