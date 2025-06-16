import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart } from "lucide-react";

const Mission = () => {
	return (
		<section className="lg:ml-[24rem] flex text-green-900 py-20 px-4 md:px-12">
			<div className="max-w-7xl mx-auto">
				{/* Heading Section */}
				<div className="mb-12">
					<h4 className="font-semibold text-sm text-green-900 mb-2">Mission</h4>
					<h2 className="text-3xl md:text-5xl font-bold leading-tight  md:ml-auto">
						Through thoughtful and responsive lawyering, we welcome, inspire,
						and sustain the vitality and rebellion of our clients.
					</h2>
				</div>

				{/* Clients List */}
				<p className="text-black font-bold mb-4 mt-20 md:mt-32">
					OUR GUIDING VALUES
				</p>

				<p>
					<div className="font-bold text-black inline">
						Impact Matters Law provides creative legal solutions to businesses
						and organizations focused on creating community-driven impacts and
						positive change in their industries.
					</div>
					Our legal practice is rooted in four foundational values that inform
					every decision we make and every partnership we build. These
					principles are at the heart of our work and guide us in supporting
					those shaping a more equitable world.
				</p>
			</div>
		</section>
	);
};

const Practice = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* Left Side Heading */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-bold text-green-900 leading-tight">
						Cooperative Practice
					</h2>
				</div>

				{/* Right Side Content */}
				<div className="space-y-6 text-gray-800 text-base leading-relaxed">
					<p className="font-semibold">
						Impact Matters operates as a worker-owned cooperative, embracing the
						transparency, democratic management, and profit-sharing models that
						are foundational to cooperatives. We’re constantly seeking ways to
						walk the walk, exploring how to nurture our team and broader network
						of aligned lawyers, professionals, and peers.
					</p>

					<p>
						Operating as a cooperative gives each member of our team a sense of
						alignment in striving towards our firm’s mission. It also gives each
						of us valuable empathy with many of the questions, goals, and
						challenges facing our clients. We’re regularly trading notes and
						ideas with other conscious small business owners, sharing with
						clients what has worked for us, and what has not.
					</p>

					<p>
						When we engage with clients, we place values at the foundation of
						that relationship. We share our core values as a firm and have the
						client share their own. Together, we affirm and acknowledge these
						values, centering our work together, and clarifying an essential
						perspective from which to devise a legal strategy.
					</p>
				</div>
			</div>
		</section>
	);
};

function CommunityCard({
	heading,
	strongHeading,
	description,
	image,
	imagealt,
}) {
	return (
		<div className="w-full max-w-sm flex flex-col items-center">
			{/* Square Card */}
			<div className="aspect-square w-full bg-green-900 rounded-lg p-8 flex flex-col items-center justify-center">
				<img src={image} alt={imagealt} className="w-12 h-12 mb-4" />
				<h3 className="text-xl text-amber-50 font-semibold">{heading}</h3>
			</div>

			{/* Description */}
			<div className="mt-4 flex px-2 text-sm sm:text-base text-gray-900">
				<p>
					<strong className="font-semibold block mb-2">{strongHeading}</strong>
					{description}
				</p>
			</div>
		</div>
	);
}

function OrganizationFeatureCard({
	title,
	color,
	bg,
	orgNameTop,
	orgNameBottom,
	strongtext,
	description,
}) {
	return (
		<div className="flex flex-col space-y-8 gap-4">
			{/* Text Content */}
			<div className="">
				<h3 className={`text-xl font-bold mb-2 ${color}`}>{title}</h3>
				<p className="text-sm my-12 text-gray-800 leading-relaxed">
					<strong>{strongtext}</strong> {description}
				</p>
			</div>

			{/* Square-ish Card */}
			<div
				className={`${bg} rounded-xl w-full aspect-[2/3] flex items-end p-4`}
			>
				<div>
					<h4 className="text-lg font-semibold text-white">{orgNameTop}</h4>
					<h4 className="text-2xl font-semibold text-white -mt-1">
						{orgNameBottom}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default function Impact() {
	const organizations = [
		{
			title: "Community",
			color: "text-green-700",
			bg: "bg-green-900",
			orgNameTop: "LA",
			orgNameBottom: "Commons",
			strongtext: "Serving the community",
			description:
				"LA Commons empowers diverse, low-income communities through youth-led, community-based public art that fosters connection and cultural expression. As their trusted counsel, we help LA Commons ensure they have the corporate foundation to sustain and scale their work and to scope, structure, and navigate relationships with their funders, partner organizations, and community artists.",
		},
		{
			title: "Culture",
			color: "text-red-700",
			bg: "bg-red-900",
			orgNameTop: "Prosperity",
			orgNameBottom: "Market",
			strongtext: "Serving the community",
			description:
				"LA Commons empowers diverse, low-income communities through youth-led, community-based public art that fosters connection and cultural expression. As their trusted counsel, we help LA Commons ensure they have the corporate foundation to sustain and scale their work and to scope, structure, and navigate relationships with their funders, partner organizations, and community artists.",
		},
		{
			title: "Co-Creation",
			color: "text-purple-700",
			bg: "bg-purple-800",
			orgNameTop: "United Way",
			orgNameBottom: "of Greater Los Angeles",
			strongtext: "Serving the community",
			description:
				"LA Commons empowers diverse, low-income communities through youth-led, community-based public art that fosters connection and cultural expression. As their trusted counsel, we help LA Commons ensure they have the corporate foundation to sustain and scale their work and to scope, structure, and navigate relationships with their funders, partner organizations, and community artists.",
		},
		{
			title: "Collective Intelligence",
			color: "text-indigo-600",
			bg: "bg-indigo-900",
			orgNameTop: "Inclusive Action",
			orgNameBottom: "for the City",
			strongtext: "Serving the community",
			description:
				"LA Commons empowers diverse, low-income communities through youth-led, community-based public art that fosters connection and cultural expression. As their trusted counsel, we help LA Commons ensure they have the corporate foundation to sustain and scale their work and to scope, structure, and navigate relationships with their funders, partner organizations, and community artists.",
		},
	];
	return (
		<div>
			<Navbar />
			<Mission />
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="flex flex-wrap justify-center gap-8">
					{[
						{
							heading: "Community",
							strongHeading:
								"Serving the community, by not just helping our clients but by also being conscious of the context and communities that they come from and seek to serve.",
							description:
								"We prioritize the needs of the people at the heart of every project, especially here in Los Angeles, and are honored to be a trusted advisor in crafting solutions that create lasting legacies.",
							image: "/heart.svg",
							imagealt: "heart",
						},
						{
							heading: "Equity",
							strongHeading:
								"Centering equity in every legal process to ensure fair access and participation for those historically left out.",
							description:
								"Our team commits to dismantling systemic barriers and designing frameworks that serve everyone with dignity and justice.",
							image: "/handshake.svg",
							imagealt: "handshake",
						},
						{
							heading: "Sustainability",
							strongHeading:
								"Pursuing long-term impact by integrating environmental and social stewardship into legal counsel.",
							description:
								"We partner with mission-driven organizations working at the intersection of business, justice, and ecology.",
							image: "/plant.svg",
							imagealt: "plant",
						},
						{
							heading: "Integrity",
							strongHeading:
								"Upholding honesty, transparency, and consistency in everything we do.",
							description:
								"We believe that relationships built on trust are the foundation of meaningful, lasting impact.",
							image: "/owl.svg",
							imagealt: "owl",
						},
					].map((card, index) => (
						<div
							key={index}
							className="w-full md:w-[calc(50%-1rem)] max-w-md flex-grow"
						>
							<CommunityCard {...card} />
						</div>
					))}
				</div>
			</section>
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Section Title */}
				<div className="mb-12 space-y-6 text-center md:text-left">
					<h2 className="text-sm font-semibold text-green-700 tracking-wider uppercase">
						Stories of Impact
					</h2>
					<h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
						Our focus at Impact Matters Law is supporting our clients’ visions
						for the future and the impact they make on the world.
					</h3>
				</div>

				{/* Responsive Card Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{organizations.map((org, idx) => (
						<OrganizationFeatureCard key={idx} {...org} />
					))}
				</div>
			</section>

			<Practice />
			<Footer />
		</div>
	);
}
