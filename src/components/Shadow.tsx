import Image from "next/image";
import bookshelfbg from "../../assets/bookshelfbg.jpg";

export default function Shadow() {
  return (
    <>
      <div className="inset absolute z-10 h-full w-full bg-black bg-opacity-60"></div>
      <Image src={bookshelfbg} fill alt="Bookshelf background image" />
    </>
  );
}
