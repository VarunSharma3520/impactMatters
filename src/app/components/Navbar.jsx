"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import noise from "../../assets/images/noise.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav
			className="bg-green-950 py-4 px-6 text-amber-100"
			style={{
				backgroundImage: `url(${noise.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				backgroundBlendMode: "overlay",
			}}
		>
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link
					href="/"
					className="text-left leading-tight border-t border-b border-white px-2"
				>
					<p className="font-semibold">IMPACT</p>
					<p className="font-semibold">MATTERS</p>
					<p className="font-semibold">LAW LLP</p>
				</Link>

				{/* Hamburger icon */}
				<button
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				{/* Navigation links */}
				<div
					className={`${
						menuOpen ? "flex" : "hidden"
					} absolute top-20 left-0 w-full flex-col items-center space-y-4 bg-green-950 py-6 text-sm tracking-wide md:static md:flex md:flex-row md:space-x-12 md:space-y-0 md:bg-transparent`}
				>
					<Link href="/impact" className="hover:underline">
						IMPACT
					</Link>
					<div className="relative group">
						<button className="hover:underline flex items-center space-x-1">
							<span>PRACTICE AREAS</span>
							<span className="text-xs">＋</span>
						</button>
					</div>
					<Link href="/team-member" className="hover:underline">
						TEAM
					</Link>

					{/* Contact in mobile menu only */}
					<Link
						href="/contact-us"
						className="flex items-center space-x-1 hover:underline text-sm md:hidden"
					>
						<span>CONTACT</span>
						<ArrowUpRight size={14} />
					</Link>
				</div>
			</div>
		</nav>
	);
}
