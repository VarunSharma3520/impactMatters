import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImpactCard from "../components/ImpactCard";

function WhoWeServe() {
	return (
		<section className="md:ml-[24rem] flex  text-green-900 py-20 px-4 md:px-12">
			<div className="max-w-7xl mx-auto">
				{/* Heading Section */}
				<div className="mb-12">
					<h4 className="font-semibold text-sm text-green-900 mb-2">
						WHO WE SERVE
					</h4>
					<h2 className="text-3xl md:text-5xl font-bold leading-tight  md:ml-auto">
						We’re proud to partner with those shaping a brighter, more equitable
						future.
					</h2>
				</div>

				{/* Clients List */}
				{/* <div className=""> */}
				<p className="text-black mb-4 mt-20 md:mt-32">Our client include:</p>
				<div className="flex gap-0.5 text-gray-600">
					<div className="flex flex-col">
						<p>Impact-Focused Investment Funds</p>
						<p>Social Enterprises & Startups</p>
						<p>Cooperative & Community Ownership Structures</p>
					</div>
					<div className="flex flex-col ml-8">
						<p>Creative Industries</p>
						<p>Tech for Good</p>
					</div>
				</div>
				{/* </div> */}
			</div>
		</section>
	);
}

export default function Imapact() {
	return (
		<div>
			<Navbar />
      <WhoWeServe />
      <ImpactCard />
			<Footer />
		</div>
	);
}
