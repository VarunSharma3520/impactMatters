"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import noise from "../../assets/images/noise.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav
  className="bg-green-950 py-4 px-6 text-amber-100 relative z-50"
  style={{
    backgroundImage: `url(${noise.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundBlendMode: "overlay",
  }}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
    {/* Logo */}
    <Link
      href="/"
      className="text-left leading-tight border-t border-b border-white px-2 flex-shrink-0 relative z-50"
      aria-label="Go to homepage"
    >
      <p className="font-semibold">IMPACT</p>
      <p className="font-semibold">MATTERS</p>
      <p className="font-semibold">LAW LLP</p>
    </Link>

    <div className="flex items-center space-x-4 md:space-x-12 flex-grow justify-end">
      {/* Hamburger */}
      <button
        className="md:hidden focus:outline-none focus:ring-2 focus:ring-green-300 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-[72px] left-0 w-full flex-col items-center space-y-4 bg-green-950 py-6 text-sm tracking-wide md:static md:flex md:flex-row md:space-x-12 md:space-y-0 md:bg-transparent md:w-auto`}
      >
        <Link href="/impact" className="hover:underline" onClick={() => setMenuOpen(false)}>
          IMPACT
        </Link>

        <div className="relative group">
          <button
            className="hover:underline flex items-center space-x-1"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>PRACTICE AREAS</span>
            <span className="text-xs">＋</span>
          </button>
        </div>

        <Link href="/team-member" className="hover:underline" onClick={() => setMenuOpen(false)}>
          TEAM
        </Link>

        <Link
          href="/contact-us"
          className="flex items-center space-x-1 hover:underline text-sm border border-amber-100 rounded px-3 py-1 transition-colors hover:bg-amber-100 hover:text-green-950 md:inline-flex"
          onClick={() => setMenuOpen(false)}
          aria-label="Contact us"
        >
          <span>CONTACT</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  </div>
</nav>

  );
}
