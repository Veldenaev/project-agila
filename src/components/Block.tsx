import Head from "next/head";
import Layout from "./Layout";

interface Props {
  title: string;
}

export default function Block({ title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <p className="text-2xl text-white">
              You are not authorized to view this page...
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
