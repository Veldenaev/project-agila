import Image from "next/image";
import bookshelfbg from "../../assets/bookshelfbg.jpg";
import Link from "next/link";

export default function Shadow() {
  return (
    <>
      <div className="inset absolute z-10 h-full w-full bg-black bg-opacity-60" />
      <Image src={bookshelfbg} fill alt="Bookshelf background image" />
      <Link
        className="absolute left-5 top-5 z-20 text-white shadow-md hover:text-agila"
        href="/"
      >
        Project Agila
      </Link>
    </>
  );
}
