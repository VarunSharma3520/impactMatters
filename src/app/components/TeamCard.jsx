import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TeamCard = ({
	name,
	role,
	categories = [],
	image = "https://placehold.co/600x400",
}) => {
	return (
		<div className="overflow-hidden min-w-fit">
			{/* Content Section */}
			<div className="p-6 flex flex-col justify-between min-h-8/12">
				<div>
					<h2 className="text-xl font-semibold text-green-900">{name}</h2>
					<p className="text-gray-600 mt-1">{role}</p>
				</div>
				{/* Image Section with floating button */}
				<div className="relative h-96 w-full">
					<img
						src={image}
						alt={`${name}'s image`}
						className="w-full h-full object-cover"
					/>
					<Link href="/team-profile" className="absolute bottom-2 right-2 bg-green-900 text-white p-2 rounded-md shadow-md">
						<ArrowUpRight size={16} />
					</Link>
				</div>
				{/* Categories with border */}
				<div className="flex border-t border-b justify-between items-end mt-6 py-2">
					<div className="text-sm text-green-900">
						{categories.length > 0 ? categories.join("  │  ") : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
