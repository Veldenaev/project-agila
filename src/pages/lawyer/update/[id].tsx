import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { type Case } from "~/utils/types";
import { type GetServerSideProps } from "next";
import prisma from "~/lib/prisma";

interface Props {
  lawyer: Case;
}

export default function UpdateCase({ lawyer }: Props) {
  const router = useRouter();
  const [newLawyer, setNewLawyer] = useState(lawyer);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch(`/api/case/${lawyer.CaseNum}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLawyer),
      });
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Update Case</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <form
            onSubmit={submitData}
            className="z-10 mx-auto my-auto flex flex-col gap-4"
          >
            <h1 className="text-center font-bold tracking-tight text-white sm:text-[3rem]">
              <span className="text-agila">Update</span> Case #{lawyer.CaseNum}
            </h1>
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 pb-5">
              {Object.entries(lawyer).map(([k, v], index) => (
                <div key={index} className="flex flex-col">
                  <span className="pl-1 text-black">{k}</span>
                  <input
                    className="rounded-md border-2 border-solid border-black px-1 disabled:bg-gray-200"
                    autoFocus
                    onChange={(e) =>
                      setNewLawyer((oldLawyer) => ({
                        ...oldLawyer,
                        [k]: e.target.value,
                      }))
                    }
                    disabled={["LawyerID"].includes(k)}
                    placeholder={k}
                    defaultValue={v as string}
                    type={typeof v === "string" ? "text" : "number"}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 text-lg">
              <input
                type="submit"
                value="Update"
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lawyer = await prisma.lawyer.findUnique({
    where: {
      LawyerID: Number(params?.id),
    },
  });
  return {
    props: { lawyer },
  };
};
