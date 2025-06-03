"use client";
import { Plus } from "lucide-react";
//TODO almost same improve ui
const clients = [
	{
		title: "Impact-Focused Investment Funds",
		color: "bg-[#510C0C]", // dark red
	},
	{
		title: "Social Enterprises and Startups",
		color: "bg-[#3D1271]", // purple
	},
	{
		title: "Cooperative and Community Ownership",
		color: "bg-[#1B361F]", // green
	},
	{
		title: "Technology for Good Initiatives",
		color: "bg-[#510C0C]", // dark red again
	},
	{
		title: "Expert Professional Legal Solution",
		color: "bg-[#3D1271]", // purple again
	},
];

export default function Home3() {
	return (
		<section className="bg-white text-green-900 px-6 py-12 border-t border-b border-black">
			<div className="max-w-6xl mx-auto">
				<p className="uppercase text-sm font-semibold tracking-widest mb-2">
					Who We Serve
				</p>
				<h2 className="text-2xl md:text-4xl font-medium leading-snug">
					We&apos;re proud to partner with the <strong>builders of tomorrow</strong>{" "}
					– those shaping a brighter, more equitable future.
					<br />
					Our clients include:
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
					{clients.map((client, index) => (
						<div
							key={index}
							className="flex flex-col border border-gray-200 shadow-sm font-semibold text-2xl"
						>
							<img
								src="https://placehold.co/600x900"
								alt={client.title}
								className="w-full h-auto object-cover"
							/>
							<div
								className={`flex justify-between items-center text-white px-3 py-4 ${client.color}`}
							>
								<span className="text-sm font-medium">{client.title}</span>
								<Plus size={16} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
