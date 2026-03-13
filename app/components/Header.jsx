import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800 bg-black text-white">

  {/* Logo */}

  <div>
    <Image
      src="/logo.png"
      width={174}
      height={61}
      alt="logo"
    />
  </div>

  {/* Right Side (Menu + Buttons) */}

  <div className="flex items-center gap-10">

    <nav className="flex gap-8 text-gray-300 font-classy">
      <Link href="#">Home</Link>
      <Link href="#">About us</Link>
      <Link href="#">Products</Link>
      <Link href="#">Contact us</Link>
      <Link href="#">FAQ</Link>
    </nav>

    <div className="flex gap-4 font-classy">
      <button className="bg-gradient-to-r from-[#FF6B35] to-[#E31E24] px-15 py-2 rounded-full text-white border border-white">
        Sign in
      </button>

      <button className="border border-white px-15 py-2 rounded-full">
        Sign up
      </button>
    </div>

  </div>

</header>
  );
}