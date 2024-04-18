import Head from "next/head";
import React, { type ReactNode } from "react";
import Shadow from "./Shadow";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Shadow />
      {children}
    </>
  );
}
