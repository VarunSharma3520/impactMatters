export default function ImpactCard({
	number = 1,
	heading1 = "Impact-Focused",
	heading2 = "Investment Funds",
	heading3=""
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
