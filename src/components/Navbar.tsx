import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import {
  BellAlertIcon,
  HomeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b border-gray-200 pb-2">
      <Link className="flex items-center" href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className=" hidden md:block text-md font-medium tracking-wider">
          TRENDLAMA
        </p>
      </Link>
      <div className="flex items-center gap-6 ">
        <SearchBar />
        <Link href="/">
          <HomeIcon className="h-5 w-5 text-gray-500" />
        </Link>
        <BellAlertIcon className="h-5 w-5 text-gray-500 " />
        <ShoppingCartIcon className="h-5 w-5 text-gray-500" />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
}
