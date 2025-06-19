import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ArrowUpRight } from "lucide-react";

function ClientTestimonial() {
	return (
		<div className="bg-amber-50 text-amber-900 text-center px-4 py-12">
			<hr className="border-amber-200 max-w-6xl mx-auto" />

			<h3 className="my-8 text-xl md:text-2xl font-bold tracking-wide">
				CLIENT TESTIMONIAL
			</h3>

			<p className="max-w-4xl mx-auto text-sm md:text-base font-extralight leading-relaxed mb-8">
				&quot;From the very first consultation, I knew I was in good hands. The
				team at Impact Matters was not only knowledgeable and professional, but
				also incredibly compassionate and attentive to every detail of my case.
				They took the time to listen, explain my options clearly, and guide me
				through every step of the legal process. Thanks to their hard work and
				dedication, we achieved a successful outcome that truly exceeded my
				expectations. I can’t recommend Impact Matters highly enough.&quot;
			</p>

			<p className="text-sm md:text-base font-medium">— Jessica Moss</p>

			<hr className="mt-12 border-amber-200 max-w-6xl mx-auto" />
		</div>
	);
}

function ImpactCard({
	number = "01",
	heading1 = "Impact-Focused",
	heading2 = "Investment Funds",
	heading3 = "",
}) {
	return (
		<section className="text-green-900 py-16 px-4 md:px-12">
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-start">
				{/* Image - First on mobile, last on desktop */}
				<div className="order-1 md:order-3 md:col-span-1">
					<img
						src="https://placehold.co/400x900"
						alt="Impact illustration"
						className="w-full h-auto object-cover"
					/>
				</div>

				{/* Left Column - Section Number and Title */}
				<div className="order-2 md:order-1 md:col-span-1">
					<p className="font-semibold text-sm mb-2">{number}</p>
					<h2 className="text-2xl md:text-3xl font-bold text-green-900 leading-snug">
						{heading1}
						<br />
						{heading2}
					</h2>
				</div>

				{/* Center Column - Main Content */}
				<div className="order-3 md:order-2 md:col-span-2">
					<h3 className="text-xl md:text-2xl font-bold mb-4">
						Advancing Purpose-Driven
						<br />
						Funds for Long-Term
						<br />
						Social Impact
					</h3>
					<p className="mb-6 leading-relaxed">
						We partner with innovators from a wide range of sectors to launch
						mission-driven investment funds that prioritize social and
						environmental impact alongside financial returns. <br />
						<br />
						Our legal team provides strategic counsel to ensure compliance,
						structure investments effectively, and align legal frameworks with
						your broader goals. Whether you're launching a new fund, navigating
						regulatory complexities, or structuring impact-driven transactions,
						we help you maximize your positive influence, responsibly promote
						rebellious governance and financial structures, and comply with
						applicable laws and duties as you effectively steward investment
						dollars. Our services include:
					</p>

					<ul className="space-y-4">
						<li>
							<strong>Fund Formation and Structuring:</strong> We help create
							legally sound structures that align with fund’s mission-driven
							goals, including equity, debt, and hybrid models.
						</li>
						<li>
							<strong>Regulatory Compliance and Reporting:</strong> Ensuring
							compliance with federal and state regulations and reporting
							requirements, while helping you manage a growing business.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

function CaseStudySection() {
	return (
		<section className="bg-purple-950 text-white px-4 md:px-20 py-42">
			<div className="max-w-7xl mx-auto flex flex-col gap-12">
				{/* Header */}
				<div className="flex items-center lg:ml-24 space-x-3 text-xl font-semibold text-purple-100/75">
					<p>01.</p>
					<h2>Mad Capital Group</h2>
				</div>

				{/* Content Flex Container */}
				<div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
					{/* Left: Icon */}
					<div className="hidden lg:flex justify-center md:w-1/3">
						<div className="bg-purple-700/25 rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
							<img
								src="/graph.svg"
								alt="Graph Icon"
								className="w-20 sm:w-28 md:w-32 h-auto"
							/>
						</div>
					</div>

					{/* Right: Text */}
					<div className="w-full md:w-2/3 text-sm md:text-base text-[#E1DAF8] leading-relaxed">
						<p>
							We played a crucial role in helping Mad Capital Group, PBC design,
							launch, manage, and iterate upon their Perennial Fund model,
							through which they have raised tens of millions of dollars to
							deploy as patient and responsive capital to support organic,
							regenerative farmers and ranchers across the U.S. Mad Capital is
							an innovative and impact-oriented finance company leveraging a
							wide range of capital sources to provide flexible, transparent,
							and customized financing built exclusively for organic,
							regenerative, and transitioning farmers.
							<br />
							<br />
							We also helped Mad Capital with its own organizational growth and
							development, negotiating and formalizing Mad Capital’s spin off
							from its nonprofit incubator, and negotiating impact-conscious
							venture financing in connection with that launch.{" "}
							<a
								href="#"
								className="text-[#D1AFFF] underline decoration-purple-600 hover:opacity-80 transition"
							>
								Read more about Mad Capital’s story here.
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function ImpactFundCards({ number, heading1, heading2, desc }) {
	return (
		<section className="text-green-900 px-4 md:px-12 py-8 md:py-16">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-12 items-start">
				{/* Left Column - Number + Heading */}
				<div className="md:col-span-1 flex flex-col space-y-2">
					<p className="text-sm font-semibold text-green-700">{number}</p>
					<h2 className="text-2xl sm:text-3xl font-bold leading-snug">
						{heading1}
						<br />
						{heading2}
					</h2>
				</div>

				{/* Right Column - Description */}
				<div className="md:col-span-3 self-center text-sm md:text-base leading-relaxed text-green-900">
					<p>{desc}</p>
				</div>
			</div>
		</section>
	);
}

const OtherPracticeAreas = ({
	practiceAreas = [
		"Impact Investment Funds",
		"Cooperatives",
		"Intellectual Property",
	],
}) => {
	return (
		<section className="px-4 md:px-16 my-24 max-w-7xl mx-auto py-12">
			{/* Header */}
			<h2 className="text-sm text-center font-semibold text-gray-800 uppercase mb-8">
				Other Practice Areas
			</h2>

			{/* Cards Container */}
			<div className="flex flex-wrap justify-center gap-8">
				{practiceAreas.map((area) => (
					<a
						href="#"
						key={area}
						className="flex items-center justify-between w-full sm:w-auto min-w-[240px] max-w-xs bg-green-900 text-green-100 hover:bg-green-800 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200"
					>
						<span>{area}</span>
						<span className="bg-green-800 p-2 rounded-md text-green-300 text-lg">
							<ArrowUpRight size={18} />
						</span>
					</a>
				))}
			</div>
		</section>
	);
};


function TypeOfClient() {
	return (
		<section className="py-16 px-4 md:px-12 bg-white lg:ml-[24rem]">
			<h3 className="font-bold mb-12 text-center lg:text-left">
				Types of Clients
			</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white max-w-6xl mx-auto">
				<div className="bg-green-900 rounded-2xl px-6 py-10 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform">
					<img
						src="/handshake.svg"
						alt="Social Enterprises and Startups"
						className="h-12 mb-4"
					/>
					<p className="font-medium">Social Enterprises & Startups</p>
				</div>

				<div className="bg-purple-900 rounded-2xl px-6 py-10 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform">
					<img
						src="/graph.svg"
						alt="Impact-Focused Investment Funds"
						className="h-12 mb-4"
					/>
					<p className="font-medium">Impact-Focused Investment Funds</p>
				</div>

				<div className="bg-red-900 rounded-2xl px-6 py-10 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform">
					<img src="/shield.svg" alt="Tech for Good" className="h-12 mb-4" />
					<p className="font-medium">Tech for Good</p>
				</div>
			</div>
		</section>
	);
}

export default function ImpactFunds() {
	return (
		<div className="impact-funds">
			<Navbar />
			<main className="min-h-screen">
				<section className="lg:ml-[24rem] py-20 px-4 md:px-12 text-green-900">
					<div className="max-w-7xl mx-auto flex flex-col gap-10">
						{/* Heading Section */}
						<div>
							<h4 className="font-semibold text-sm text-green-800 uppercase tracking-wider mb-2">
								Impact Investment Funds
							</h4>
							<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
								Structuring Funds that Prioritize Positive Change Alongside
								Financial Returns.
							</h2>
						</div>

						{/* Body Text */}
						<p className="text-sm md:text-base text-muted text-green-900 leading-relaxed mt-10 md:mt-20 max-w-3xl">
							We specialize in forming private funds that prioritize social,
							environmental, and financial returns. We provide comprehensive
							legal guidance whether you’re creating an impact-focused
							investment fund or developing a social venture.
						</p>

						{/* Services List */}
						<div className="flex flex-wrap gap-x-8 gap-y-4 mt-16 text-sm font-medium text-gray-700">
							<p>Fund Structuring</p>
							<p>Securities Compliance</p>
							<p>Investor Relations & Fundraising</p>
						</div>
					</div>
				</section>
				<section className="px-4 md:px-12 py-8 space-y-12">
					{/* Card 1 */}
					<div className="space-y-6">
						<hr className="border-gray-300" />
						<ImpactFundCards
							number="01"
							heading1="Fund"
							heading2="Structuring"
							desc="We partner with innovators from a wide range of sectors to launch mission-driven investment funds that prioritize social and environmental impact alongside financial returns."
						/>
					</div>

					{/* Card 2 */}
					<div className="space-y-6">
						<hr className="border-gray-300" />
						<ImpactFundCards
							number="02"
							heading1="Securities"
							heading2="Compliance"
							desc="We partner with innovators from a wide range of sectors to launch mission-driven investment funds that prioritize social and environmental impact alongside financial returns."
						/>
					</div>

					{/* Card 3 */}
					<div className="space-y-6">
						<hr className="border-gray-300" />
						<ImpactFundCards
							number="03"
							heading1="Investor Relations"
							heading2="and Fundraising"
							desc="We partner with innovators from a wide range of sectors to launch mission-driven investment funds that prioritize social and environmental impact alongside financial returns."
						/>
						<hr className="border-gray-300" />
					</div>
				</section>
				<TypeOfClient />
				<CaseStudySection />
				<ClientTestimonial />
				<OtherPracticeAreas />
			</main>
			<Footer />
		</div>
	);
}
