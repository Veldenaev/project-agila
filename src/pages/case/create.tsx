import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { type Case } from "~/utils/types";

export default function CreateCase() {
  const router = useRouter();
  const defaultCase: Case = {
    CaseNum: "",
    ContractID: 0,
    ClientID: 0,
    Status: "",
    Type: "",
    Title: "",
    Venue: "",
  };
  const [newCase, setNewCase] = useState(defaultCase);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/case", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCase),
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Add Case</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <form
            onSubmit={submitData}
            className="z-10 mx-auto my-auto flex flex-col gap-4"
          >
            <h1 className="text-center font-extrabold tracking-tight text-white sm:text-[3rem]">
              <span className="text-[hsl(280,100%,80%)]">Add</span> a new case
            </h1>
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 pb-5">
              {Object.entries(defaultCase).map(([k, v], index) => (
                <div key={index} className="flex flex-col">
                  <span className="pl-1 text-black">{k}</span>
                  <input
                    className="rounded-md border-2 border-solid border-black px-1"
                    autoFocus
                    onChange={(e) =>
                      setNewCase((oldCase) => ({
                        ...oldCase,
                        [k]: e.target.value,
                      }))
                    }
                    placeholder={k}
                    type={typeof v === "string" ? "text" : "number"}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 text-lg">
              <input
                type="submit"
                value="Create"
                className="rounded-md bg-blue-400 px-2 py-1 text-white transition-all hover:scale-110 hover:cursor-pointer"
              />
              <a
                href="#"
                onClick={router.back}
                className="rounded-md bg-red-400 px-2 py-1 text-white transition-all hover:scale-110 hover:cursor-pointer hover:cursor-pointer"
              >
                Cancel
              </a>
            </div>
          </form>
        </main>
      </Layout>
    </>
  );
}
