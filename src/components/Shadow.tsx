import Image from "next/image";
import bookshelfbg from "../../assets/bookshelfbg.jpg";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Shadow() {
  const { data: session } = useSession();
  return (
    <>
      <div className="inset absolute z-10 h-full w-full bg-black bg-opacity-60" />
      <Image src={bookshelfbg} fill alt="Bookshelf background image" />
      <div className="absolute z-20 flex w-full flex-row items-center justify-between p-5 text-white shadow-md">
        <Link href="/">Project Agila</Link>
        {session ? (
          <button className="btn-blue" onClick={() => signIn()}>
            Logout {session.user.id}
          </button>
        ) : (
          <button className="btn-blue" onClick={() => signOut()}>
            Login
          </button>
        )}
      </div>
    </>
  );
}
