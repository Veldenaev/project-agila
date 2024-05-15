import Head from "next/head";
import Layout from "./Layout";
import Link from "next/link";

interface Props {
  title: string;
  body: string | undefined;
}

export default function Block({ title, body="You are not authorized to view this page" }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <main className="flex min-h-screen flex-col">
          <div className="z-10 my-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <p className="text-2xl text-white">
              {body}
            </p>
            <Link href={'/rerouter'} className="btn-red">Return</Link>
          </div>
        </main>
      </Layout>
    </>
  );
}
