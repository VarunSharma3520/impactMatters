"use client";
import { useState } from "react";
import { ArrowUpRight, X, Plus } from "lucide-react";
import Link from "next/link";
import noise from "../../assets/images/noise.svg";

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
		<div
			className="bg-green-950 text-amber-100 p-4 sm:p-6 md:p-12 space-y-6 font-sans"
			style={{
				backgroundImage: `url(${noise.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				backgroundBlendMode: "overlay",
			}}
		>
			<div className="uppercase text-xs sm:text-sm text-green-100 tracking-widest">
				What we do
			</div>
			<h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug max-w-full sm:max-w-3xl">
				We Offer&nbsp;
				<span className="">Comprehensive Legal Services</span>
				&nbsp;Designed To Support Impactful Ventures At Every Stage.
			</h2>

			<div className="space-y-3 pt-4 sm:pt-6">
				{data.map((item, index) => {
					const isOpen = openIndex === index;
					return (
						<div
							key={index}
							className={`rounded-md ${
								isOpen ? "bg-[#739F69]" : "hover:bg-green-800/30"
							} transition-colors duration-200`}
						>
							<button
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className={`w-full text-left flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 font-semibold text-base sm:text-lg ${
									isOpen ? "text-green-950" : ""
								} focus:outline-none focus:ring-2 focus:ring-green-300`}
								aria-expanded={isOpen}
								aria-controls={`accordion-content-${index}`}
								id={`accordion-header-${index}`}
							>
								<span className="flex-1">{item.title}</span>
								<span className="ml-4 flex-shrink-0">
									{isOpen ? <X size={20} /> : <Plus size={20} />}
								</span>
							</button>

							{isOpen && item.description && (
								<div
									id={`accordion-content-${index}`}
									role="region"
									aria-labelledby={`accordion-header-${index}`}
									className="flex flex-col sm:flex-row justify-between border-t border-green-950 px-3 sm:px-4 pb-4 space-y-3 sm:space-y-0 sm:space-x-4"
								>
									<p className="text-sm sm:text-base text-green-950 flex-1">
										{item.description}
									</p>
									{item.link && (
										<Link
											href={item.link}
											className="inline-flex items-center px-4 py-2 bg-green-900 rounded hover:bg-green-800 transition text-sm sm:text-base whitespace-nowrap"
											aria-label={`Learn more about ${item.title}`}
										>
											<ArrowUpRight className="w-4 h-4 mr-1" />
											Learn More
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
