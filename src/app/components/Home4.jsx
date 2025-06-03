"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import noise from "../../assets/images/noise.svg"


export default function Home4() {
	const principles = [
		"Community",
		"Culture",
		"Co-Creation",
		"Collective Intelligence",
	];

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
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
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
						{principles.map((item, i) => (
							<li
								key={i}
								className="flex border-t border-neutral-600 py-4 text-lg uppercase tracking-wide"
							>
								<Link
									href="#"
									className="flex items-center justify-between w-full text-amber-50 hover:text-white transition-colors"
								>
									<span>{item}</span>
									<ArrowRight size={20} />
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Right side */}
				<div className="text-sm leading-relaxed">
					<p>
						Our core principles shape every partnership we build and every
						solution we craft for and with our clients. Based in Los Angeles,
						our practice is built on a foundation of collaboration, creativity,
						and a deep commitment to community-driven impact.
					</p>
				</div>
			</div>

			{/* Optional background graphic (abstract wave) */}
			{/* Replace with SVG or bg-image if you want to match exactly */}
			<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#183a2c33] to-[#0D1F12]"></div>
		</section>
	);
}
