// components/Navbar.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import noise from "../../assets/images/noise.svg"
export default function Navbar() {
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
					className="text-left leading-tight border-t border-b p-x4 border-white"
				>
					<p className="font-semibold">IMPACT</p>
					<p className="font-semibold">MATTERS</p>
					<p className="font-semibold">LAW LLP</p>
				</Link>

				{/* Center nav items */}
				<div className="flex space-x-12 text-sm tracking-wide">
					<Link href="/impact" className="hover:underline">
						IMPACT
					</Link>
					<div className="relative group">
						<button className="hover:underline flex items-center space-x-1">
							<span>PRACTICE AREAS</span>
							<span className="text-xs">＋</span>
						</button>
						{/* Add dropdown here if needed */}
					</div>
					<Link href="/team-profile" className="hover:underline">
						TEAM
					</Link>
				</div>

				{/* Contact link */}
				<Link
					href="/contact-us"
					className="flex items-center space-x-1 hover:underline text-sm"
				>
					<span>CONTACT</span>
					<ArrowUpRight size={14} />
				</Link>
			</div>
		</nav>
	);
}
