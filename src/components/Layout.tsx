import Head from "next/head";
import React, { type ReactNode } from "react";
import Shadow from "./Shadow";
import Image from "next/image";
import bookshelfbg from "/assets/bookshelfbg.jpg";

interface Props {
  children: ReactNode;
  shadow: boolean;
}

export default function Layout({ children, shadow=true }: Props) {

  return (

    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="inset absolute z-10 h-full w-full bg-black bg-opacity-60" />
      <Image src={bookshelfbg} fill alt="Bookshelf background image"/>
      { shadow ? <Shadow /> : null} 
      {children}
    </>
  );
}
