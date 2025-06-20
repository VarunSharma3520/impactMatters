"use client";
import { useState } from "react";
import { ArrowRight, X, Plus } from "lucide-react";

const clients = [
	{
		title: "Impact-Focused Investment Funds",
		color: "bg-[#510C0C]",
		description:
			"We partner with innovators from a wide range of sectors to launch mission-driven investment funds that prioritize social and environmental impact alongside financial returns.",
	},
	{
		title: "Social Enterprises and Startups",
		color: "bg-[#3D1271]",
		description:
			"Supporting early-stage ventures focused on solving real-world problems with sustainable, scalable solutions.",
	},
	{
		title: "Cooperative and Community Ownership",
		color: "bg-[#1B361F]",
		description:
			"Enabling equitable ownership models that empower communities and foster long-term sustainability.",
	},
	{
		title: "Technology for Good Initiatives",
		color: "bg-[#510C0C]",
		description:
			"Collaborating with tech-based organizations driving social change through innovation and accessibility.",
	},
	{
		title: "Expert Professional Legal Solution",
		color: "bg-[#3D1271]",
		description:
			"Providing trusted legal expertise tailored for impact-focused clients in dynamic regulatory environments.",
	},
];

export default function Home3() {
	const [selected, setSelected] = useState(null);

	return (
		<section className="bg-white text-green-900 px-6 py-12 border-t border-b border-black relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<p className="text-sm font-semibold tracking-widest mb-2">
					WHO WE SERVE
				</p>
				<h2 className="text-2xl md:text-4xl font-medium leading-snug">
					We&apos;re proud to partner with the{" "}
					<strong>builders of tomorrow</strong> – those shaping a brighter, more
					equitable future.
					<br />
					Our clients include:
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
					{clients.map((client, index) => (
						<button
							key={index}
							onClick={() => setSelected(index)}
							className="flex flex-col border border-gray-200 font-semibold text-2xl cursor-pointer"
						>
							<img
								src="https://placehold.co/600x900"
								alt={client.title}
								className="w-full h-auto object-cover"
							/>
							<div
								className={`flex justify-between items-center text-white px-3 py-4 ${client.color}`}
							>
								<span className="text-sm font-medium text-left">
									{client.title}
								</span>
								<Plus size={16} />
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Slide-In Panel */}
			{selected !== null && (
				<div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 p-6 md:p-10 flex flex-col">
					{/* Intro Header Section */}
					<div className="max-w-6xl mx-auto mb-8">
						<p className="text-xs md:text-sm font-semibold tracking-widest text-gray-700">
							WHO WE SERVE
						</p>
						<h2 className="text-2xl md:text-4xl font-semibold text-green-900 mt-2 leading-snug">
							We&apos;re proud to partner with the{" "}
							<strong>builders of tomorrow</strong> – those shaping a brighter,
							more equitable future.
							<br />
							Our clients include:
						</h2>
					</div>

					{/* Content Panel */}
					<div className="max-w-6xl mx-auto bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 relative flex-1">
						{/* Close Button */}
						<button
							onClick={() => setSelected(null)}
							className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
						>
							<X size={20} />
						</button>

						{/* Text Section */}
						<div className="flex flex-col justify-center">
							<h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-4">
								{clients[selected].title}
							</h3>
							<p className="text-sm text-gray-700 leading-relaxed">
								{clients[selected].description}
							</p>
							<a
								href="#"
								className="inline-flex items-center mt-6 text-sm font-medium text-green-800 hover:underline"
							>
								Learn more <ArrowRight className="ml-2" size={16} />
							</a>
						</div>

						{/* Image Section */}
						<div className="flex justify-center items-center">
							<img
								src="https://placehold.co/1600x1600"
								alt={clients[selected].title}
								className="w-full max-w-xs h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
