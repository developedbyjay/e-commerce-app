import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 p-8 bg-gray-800 md:items-start rounded-lg flex flex-col items-center md:flex-row">
      <div className="flex flex-col gap-4 items-center sm:items-start">
        <Link className="flex items-center " href="/">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <p className=" hidden md:block text-md font-medium tracking-wider">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} TRENDLAMA. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
