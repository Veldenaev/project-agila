import Head from "next/head";

import Links from "../components/Links";
import bgimg from "assets/bookshelfbg.jpg";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Project Agila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-bookshelf bg-cover bg-center">

        <Links/>

        <div className="flex flex-row items-center mt-40">

          <div className="mr-16">

            <h1 className="block font-sans text-center text-7xl text-white">Agila Law Offices</h1>
            <h2 className="block font-sans text-center text-5xl text-white">Be Agile.</h2>

          </div>

          <div className="bg-white p-8 rounded shadow-md w-80 h-">

            <h2 className="text-2xl font-semibold mb-4">Login</h2>

            <form>
                <div className="mb-4 font-sans">
                    <label className="block text-sm font-medium text-gray-700">username</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 block w-full rounded-md border border-gray-300"></input>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-2 block w-full rounded-md border border-gray-300"></input>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
            </form>

            <p className="font-sans block pt-4 text-center text-xs">Forgot password? Contact your system administrator: admin@lawoffice.com</p>

          </div>

          </div>

      </main>
    </>
  )
}

