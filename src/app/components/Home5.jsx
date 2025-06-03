"use client";
import { useState } from "react";
import { ArrowUpRight, X, Plus } from "lucide-react";
import Link from "next/link";

const data = [
	{
		title: "IMPACT INVESTMENT FUNDS",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "CAPITAL RAISING & SECURITIES LAW",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "COMMUNITY LAND OWNERSHIP",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "COOPERATIVES",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "CORPORATE LAW",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "INTELLECTUAL PROPERTY",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
	{
		title: "OUTSIDE GENERAL COUNSEL",
		description:
			"Guiding innovative funds that prioritize measurable social and environmental outcomes alongside financial returns.",
		link: "#",
	},
];

export default function Home5() {
	const [openIndex, setOpenIndex] = useState(0);
	return (
		<div className="bg-green-950 text-amber-100 p-6 md:p-12 space-y-6 font-sans">
			<div className="uppercase text-xs text-green-100 tracking-widest">
				What we do
			</div>
			<h2 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
				We Offer&nbsp;
				<span className="whitespace-nowrap">Comprehensive Legal Services</span>
				&nbsp;Designed To Support Impactful Ventures At Every Stage.
			</h2>

			<div className="space-y-2 pt-6">
				{data.map((item, index) => {
					const isOpen = openIndex === index;
					return (
						<div
							key={index}
							className={` ${
								isOpen ? "bg-[#739F69]" : "hover:bg-green-800/30"
							} transition-colors duration-200`}
						>
							<button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full text-left flex justify-between items-center px-4 py-4 font-semibold ${isOpen?"text-green-950":""}`}
							>
								{item.title}
								<span className="ml-4">
									{isOpen ? <X size={18} /> : <Plus size={18} />}
								</span>
							</button>

							{isOpen && item.description && (
								<div className="flex justify-between border-t border-green-950 px-4 pb-4">
									<p className="text-sm text-green-950 py-2">
										{item.description}
									</p>
									{item.link && (
										<Link
											href={item.link}
											className="inline-flex items-center px-4 py-2 bg-green-900 rounded hover:bg-green-800 transition"
										>
											<ArrowUpRight className=" w-4 h-4" />
										</Link>
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
