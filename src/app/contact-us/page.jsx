import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
	return (
		<div>
			<Navbar />
			<section className="max-w-7xl mx-auto py-16 px-4 md:px-12">
					<div className="mb-12 md:ml-64 lg:ml-96">
						<p className="text-xs md:text-sm font-semibold text-gray-800 uppercase mb-4">
							Get in touch
						</p>
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-950 leading-snug">
							Ready to make an impact?
							<br />
							Let’s work together to bring
							<br />
							your vision to life.
						</h2>
						<p className="text-xl md:text-2xl lg:text-3xl font-bold text-green-950 mt-6 leading-relaxed">
							Whether you’re seeking legal
							<br />
							expertise or exploring ways to
							<br />
							collaborate, we’re here to help.
						</p>
					</div>
					<div className="divide-y divide-green-900 border-t border-b border-green-900">
						<div className="py-6">
							<h3 className="text-base md:text-lg font-medium mb-1 md:ml-64 lg:ml-96">Address</h3>
							<p className="text-sm md:text-base md:ml-64 lg:ml-96">
								14011 Ventura Blvd, Suite 206E
								<br />
								Sherman Oaks, CA 91423
							</p>
						</div>
						<div className="py-6">
							<h3 className="text-base md:text-lg font-medium mb-1 md:ml-64 lg:ml-96">
								Telephone
							</h3>
							<p className="text-sm md:text-base md:ml-64 lg:ml-96">818-290-7461</p>
						</div>
						<div className="py-6">
							<h3 className="text-base md:text-lg font-medium mb-1 md:ml-64 lg:ml-96">Email</h3>
							<p className="text-sm md:text-base md:ml-64 lg:ml-96">info@impactmatters.com</p>
						</div>
					</div>
			</section>

			<Footer />
		</div>
	);
}
