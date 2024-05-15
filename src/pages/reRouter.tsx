import Layout from "~/components/Layout";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCsrfToken } from "next-auth/react";

export default function reRoute() {
  const { data: session } = useSession();

  const router = useRouter();

  const { error } = router.query;

  useEffect(() => {
    session?.user.isClient
      ? router.push(`/client/${session?.user.id}`)
      : session?.user.isAdmin
        ? router.push("/client/all")
        : session?.user.isLawyer
          ? router.push(`/client/all`)
          : router.push("/");
  });

  return (
    <>
      <Head>
        <title>Login | Heffron Cruz</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout shadow={false}></Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
