"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import noise from "../../assets/images/noise.svg";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const menuStyles = menuOpen
		? {
				backgroundImage: `url(${noise.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				backgroundBlendMode: "overlay",
		  }
		: {};
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
				<a
					href="/"
					className="text-left leading-tight border-t border-b border-white px-2 flex-shrink-0 relative z-50"
					aria-label="Go to homepage"
				>
					<p className="font-semibold">IMPACT</p>
					<p className="font-semibold">MATTERS</p>
					<p className="font-semibold">LAW LLP</p>
				</a>

				<div className="flex items-center space-x-4 md:space-x-12 flex-grow justify-end">
					{/* Hamburger for mobile */}
					<button
						className="md:hidden focus:outline-none focus:ring-2 focus:ring-green-300 rounded relative z-50"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Navigation Links */}
					<div
						className={`${
							menuOpen ? "flex" : "hidden"
						} absolute top-full left-0 w-full flex-col items-center space-y-4 bg-green-950 py-6 text-sm tracking-wide shadow-lg md:static md:flex md:flex-row md:space-x-12 md:space-y-0 md:bg-transparent md:w-auto md:shadow-none`}
						style={menuStyles}
					>
						<a
							href="/impact"
							className="hover:underline w-full text-center md:w-auto"
							onClick={() => setMenuOpen(false)}
						>
							IMPACT
						</a>

						{/* PRACTICE AREAS Dropdown */}
						<div className="relative w-full md:w-auto">
							{/* Mobile dropdown button */}
							<button
								className="hover:underline flex items-center justify-center space-x-1 w-full md:hidden"
								onClick={() => setDropdownOpen(!dropdownOpen)}
								aria-haspopup="true"
								aria-expanded={dropdownOpen}
							>
								<span
									className={`text-xs transition-transform ${
										dropdownOpen ? "rotate-45" : ""
									}`}
								>
									<span>PRACTICE AREAS</span>＋
								</span>
							</button>

							{/* Desktop dropdown button */}
							<div className="relative group hidden md:block">
								<button
									className="hover:underline flex items-center space-x-1"
									aria-haspopup="true"
									aria-expanded="false"
									onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
								>
									<span>PRACTICE AREAS</span>
									<span className="text-xs">＋</span>
								</button>

								{/* Desktop Dropdown */}
								<div
									className="fixed left-0 top-[72px] w-full bg-green-950 text-amber-100 py-12 px-8 hidden group-hover:flex justify-center z-40"
									style={{
										backgroundImage: `url(${noise.src})`,
										backgroundSize: "cover",
										backgroundRepeat: "repeat",
										backgroundBlendMode: "overlay",
									}}
								>
									<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
										{/* Left Column */}
										<div className="gap-y-12">
											<h3 className="text-xl font-semibold mb-4">What we do</h3>
											<p className="text-sm mb-12">
												We're proud to partner with{" "}
												<span className="font-semibold">
													the builders of tomorrow
												</span>{" "}
												— those shaping a brighter, more equitable future.
											</p>
											<Link
												href="/impact"
												className="inline-flex items-center space-x-1 text-sm border border-amber-100 px-3 py-1 hover:bg-amber-100 hover:text-green-950 transition-colors"
												aria-label="Learn more about impact"
											>
												<span>Learn More</span>
												<ArrowUpRight size={16} />
											</Link>
										</div>

										{/* Right Column */}
										<div>
											<div className="text-sm flex flex-col border-gray-400 divide-y divide-gray-600">
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Capital Raising & Securities Law
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Impact Investment Funds
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Community Land Ownership
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Cooperatives
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Corporate Law
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Intellectual Property
												</Link>
												<Link
													href="#"
													className="hover:font-semibold hover:cursor-pointer py-3"
												>
													Outside General Counsel
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Mobile dropdown content */}
							{dropdownOpen && (
								<div
									className="w-full bg-green-950 mt-2 py-4 px-4 rounded md:hidden"
									style={{
										backgroundImage: `url(${noise.src})`,
										backgroundSize: "cover",
										backgroundRepeat: "repeat",
										backgroundBlendMode: "overlay",
									}}
								>
									<div className="mb-4">
										<h3 className="text-lg font-semibold mb-2">What we do</h3>
										<p className="text-xs">
											We're proud to partner with{" "}
											<span className="font-semibold">
												the builders of tomorrow
											</span>{" "}
											— those shaping a brighter, more equitable future.
										</p>
									</div>
									<ul className="text-xs space-y-2">
										<li>Impact Investment Funds</li>
										<li>Capital Raising & Securities Law</li>
										<li>Community Land Ownership</li>
										<li>Cooperatives</li>
										<li>Corporate Law</li>
										<li>Intellectual Property</li>
										<li>Outside General Counsel</li>
									</ul>
								</div>
							)}
						</div>

						<a
							href="/team-member"
							className="hover:underline w-full text-center md:w-auto"
							onClick={() => setMenuOpen(false)}
						>
							TEAM
						</a>

						<a
							href="/contact-us"
							className="flex items-center justify-center space-x-1 text-sm border-amber-100 px-3 py-1 border w-full md:w-auto"
							onClick={() => setMenuOpen(false)}
							aria-label="Contact us"
						>
							<span>CONTACT</span>
							<ArrowUpRight size={14} />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
