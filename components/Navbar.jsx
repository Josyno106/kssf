import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-50 h-16 flex items-center justify-center p-4">
      <Image src={logo} width={45} height={45} />
      <nav className="flex gap-10 shadow-red-600 shadow-2xl grow items-end justify-end">
        <Link
          href={"/"}
          className="font-semibold  hover:text-green-700 hover:border-b-2 border-green-700 font-poppins   "
        >
          Home
        </Link>
        <Link
          href={"/"}
          className="font-semibold  hover:text-green-700 hover:border-b-2 border-green-700 font-poppins   "
        >
          About
        </Link>
        <Link
          href={""}
          className="font-semibold  hover:text-green-700 hover:border-b-2 border-green-700 font-poppins   "
        >
          Affiliate Clubs
        </Link>
        <Link
          href={"/gallery"}
          className="font-semibold  hover:text-green-700 hover:border-b-2 border-green-700 font-poppins   "
        >
          Gallery
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
