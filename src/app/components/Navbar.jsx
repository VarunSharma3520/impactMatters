"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import noise from "../../assets/images/noise.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [hoverDropdown, setHoverDropdown] = useState(false);

	const closeMenus = () => {
		setMenuOpen(false);
		setHoverDropdown(false);
	};

	const menuStyles = {
		backgroundImage: `url(${noise.src})`,
		backgroundSize: "cover",
		backgroundRepeat: "repeat",
		backgroundBlendMode: "overlay",
	};

	const practiceAreas = [
		{ label: "Capital Raising & Securities Law", href: "/contact-us" },
		{ label: "Impact Investment Funds", href: "/impact" },
		{ label: "Community Land Ownership", href: "/impact-funds" },
		{ label: "Cooperatives", href: "/team-member" },
		{ label: "Corporate Law", href: "/team-profile" },
		{ label: "Intellectual Property", href: "/who-we-serve" },
		{ label: "Outside General Counsel", href: "/not-found" },
	];

	const renderDropdownContent = () => (
		<div
			className="w-full bg-green-950 text-amber-100 py-12 px-8 flex justify-center fixed left-0 top-[69px] z-40"
			style={menuStyles}
			onMouseLeave={() => setHoverDropdown(false)}
		>
			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Left Column */}
				<div>
					<h3 className="text-xl font-semibold mb-4">What we do</h3>
					<p className="text-sm mb-12">
						We're proud to partner with{" "}
						<span className="font-semibold">the builders of tomorrow</span> —
						those shaping a brighter, more equitable future.
					</p>
					<Link
						href="/impact"
						className="inline-flex items-center space-x-1 text-sm border border-amber-100 px-3 py-1 hover:bg-amber-100 hover:text-green-950 transition-colors"
						onClick={closeMenus}
					>
						<span>Learn More</span>
						<ArrowUpRight size={16} />
					</Link>
				</div>

				{/* Right Column */}
				<ul className="text-sm flex flex-col border-gray-400 divide-y divide-gray-600">
					{practiceAreas.map(({ label, href }, idx) => (
						<li key={idx}>
							<Link
								href={href}
								className="block hover:font-semibold hover:cursor-pointer py-3"
								onClick={closeMenus}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	return (
		<nav
			className="bg-green-950 py-4 px-6 text-amber-100 sticky top-0 z-50"
			style={menuStyles}
		>
			<div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
				{/* Logo */}
				<a
					href="/"
					className="text-left leading-tight border-t border-b border-white px-2 flex-shrink-0"
					aria-label="Go to homepage"
				>
					<p className="font-semibold">IMPACT</p>
					<p className="font-semibold">MATTERS</p>
					<p className="font-semibold">LAW LLP</p>
				</a>

				{/* Nav Items */}
				<div className="flex items-center space-x-4 md:space-x-12 flex-grow justify-end">
					{/* Hamburger (Mobile Only) */}
					<button
						className="md:hidden focus:outline-none focus:ring-2 focus:ring-green-300 rounded"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Main Links */}
					<div
						className={`${
							menuOpen ? "flex" : "hidden"
						} absolute top-full left-0 w-full flex-col items-center space-y-4 bg-green-950 py-6 text-sm tracking-wide md:static md:flex md:flex-row md:space-x-12 md:space-y-0 md:bg-transparent md:w-auto`}
						style={menuOpen ? menuStyles : {}}
					>
						<a
							href="/impact"
							className="hover:underline w-full text-center md:w-auto"
							onClick={closeMenus}
						>
							IMPACT
						</a>

						{/* Practice Areas (hover on desktop only) */}
						<div
							className="relative w-full md:w-auto"
							onMouseEnter={() => setHoverDropdown(true)}
						>
							<button
								className="hover:underline cursor-pointer flex items-center justify-center space-x-1 w-full"
								aria-haspopup="true"
								aria-expanded={hoverDropdown}
							>
								<span>PRACTICE AREAS</span>
								<ChevronDown
									size={14}
									className={`transition-transform ${
										hoverDropdown ? "rotate-180" : ""
									}`}
								/>
							</button>
						</div>

						<a
							href="/team-member"
							className="hover:underline w-full text-center md:w-auto"
							onClick={closeMenus}
						>
							TEAM
						</a>

						<a
							href="/contact-us"
							className="flex items-center justify-center space-x-1 text-sm border-amber-100 px-3 py-1 border w-full md:w-auto"
							onClick={closeMenus}
							aria-label="Contact us"
						>
							<span>CONTACT</span>
							<ArrowUpRight size={14} />
						</a>
					</div>
				</div>
			</div>

			{/* Dropdown on hover (desktop only) */}
			{hoverDropdown && renderDropdownContent()}
		</nav>
	);
}
