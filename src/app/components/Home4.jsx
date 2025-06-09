"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import noise from "../../assets/images/noise.svg";

export default function Home4() {
	const principles = [
		"Community",
		"Culture",
		"Co-Creation",
		"Collective Intelligence",
	];

	const descriptions = {
		Community:
			"We serve the community not only by supporting our clients but by deeply understanding the contexts and communities they come from — prioritizing people at the heart of every project, especially in Los Angeles, where we’re honored to be a trusted advisor in creating lasting legacies.",
		Culture:
			"Our legal approach is rooted in cultural understanding — honoring diverse backgrounds, experiences, and traditions to help shape practices that reflect equity and inclusivity at every level.",
		"Co-Creation":
			"We work side-by-side with our clients, building solutions collaboratively. We believe shared ownership of ideas leads to better outcomes, more resilient strategies, and long-term success.",
		"Collective Intelligence":
			"Together, we are smarter. We draw on interdisciplinary knowledge, partner insights, and community wisdom to deliver legal solutions that are informed, inclusive, and forward-thinking.",
	};

	const [active, setActive] = useState("Community");

	return (
		<section
			className="bg-[#0D1F12] text-amber-50 px-6 py-16 relative"
			style={{
				backgroundImage: `url(${noise.src})`,
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				backgroundBlendMode: "overlay",
			}}
		>
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
				{/* Left side */}
				<div>
					<h2 className="text-2xl md:text-4xl leading-tight font-light">
						We work hand-in-hand with{" "}
						<span className="font-semibold">
							communities, forward thinkers, and change makers
						</span>{" "}
						dedicated to building an equitable and sustainable future.
					</h2>

					<p className="text-sm text-neutral-400 mt-10 mb-6">
						At Impact Matters, our work is guided by the 4 C’s:
					</p>

					<ul className="space-y-4">
						{principles.map((item) => (
							<li
								key={item}
								className={`flex border-t border-neutral-600 py-4 text-lg hover:font-bold uppercase tracking-wide transition-colors ${
									active === item ? "text-white font-bold" : "text-amber-50"
								}`}
							>
								<button
									onClick={() => setActive(item)}
									className="flex items-center justify-between w-full hover:text-white transition group"
								>
									<span>{item}</span>
									<ArrowRight
										size={20}
										className="transform transition-transform group-hover:translate-x-1"
									/>
								</button>
							</li>
						))}
					</ul>
				</div>

				{/* Right side (Dynamic content) */}
				<div className="text-sm leading-relaxed my-auto text-neutral-300">
					<p>{descriptions[active]}</p>
					<Link
						href="/impact"
						className="inline-flex items-center mt-6 text-xs border border-amber-100 px-6 py-2 hover:bg-amber-100 hover:text-green-950 transition"
					>
						Learn more <ArrowRight className="ml-1" size={14} />
					</Link>
				</div>
			</div>

			{/* Optional overlay */}
			<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#183a2c33] to-[#0D1F12]"></div>
		</section>
	);
}
