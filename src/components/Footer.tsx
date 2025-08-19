import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 p-8 bg-gray-800 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo + copyright */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link className="flex items-center" href="/">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider ml-2">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} TRENDLAMA.
        </p>
        <p className="text-gray-400 text-sm">All rights reserved.</p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>

      {/* Products */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/products">All Products</Link>
        <Link href="/new">New Arrivals</Link>
        <Link href="/bestsellers">Best Sellers</Link>
        <Link href="/sale">Sale</Link>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/careers">Careers</Link>
      </div>
    </footer>
  );
}

//   Using Flex Box
// <footer className="mt-16 p-8 bg-gray-800 md:items-start rounded-lg space-y-8 md:space-y-0 justify-between flex flex-col items-center md:flex-row">
//   <div className=" flex flex-col gap-4 items-center md:items-start">
//     <Link className="flex items-center " href="/">
//       <Image
//         src="/logo.png"
//         className=""
//         alt="Logo"
//         width={36}
//         height={36}
//       />
//       <p className=" hidden md:block text-md font-medium tracking-wider">
//         TRENDLAMA
//       </p>
//     </Link>
//     <p className="text-gray-400 text-sm">
//       © {new Date().getFullYear()} TRENDLAMA.
//     </p>
//     <p className="text-gray-400 text-sm">All rights reserved.</p>
//   </div>
//   <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
//     <p className="text-sm text-amber-50">Links</p>
//     <Link href="/about">Homepage</Link>
//     <Link href="/contact">Contact</Link>
//     <Link href="/privacy">Privacy Policy</Link>
//     <Link href="/terms">Terms of Service</Link>
//   </div>
//   <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
//     <p className="text-sm text-amber-50">Prodcts</p>
//     <Link href="/about">All Products</Link>
//     <Link href="/contact">New Arrivals</Link>
//     <Link href="/privacy">Best Sellers</Link>
//     <Link href="/terms">Sale</Link>
//   </div>
//   <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
//     <p className="text-sm text-amber-50">Company</p>
//     <Link href="/about">About</Link>
//     <Link href="/contact">Contact</Link>
//     <Link href="/privacy">Blog</Link>
//     <Link href="/careers">Careers</Link>
//   </div>
// </footer>
//   );
