import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ContactUs() {
	return (
		<div>
			<Navbar />
			<section className="border border-gray-300 px-6 md:px-12 py-16">
				<div className="max-w-4xl mx-auto">
					<div className="mb-12">
						<p className="text-xs font-semibold text-gray-800 uppercase mb-4">
							Get in touch
						</p>
						<h2 className="text-2xl md:text-3xl font-bold text-green-950 leading-snug">
							Ready to make an impact?
							<br />
							Let’s work together to bring
							<br />
							your vision to life.
						</h2>
						<p className="text-2xl md:text-3xl font-bold text-green-950 mt-6 leading-relaxed">
							Whether you’re seeking legal
							<br />
							expertise or exploring ways to
							<br />
							collaborate, we’re here to help.
						</p>
					</div>
					<div className="divide-y divide-gray-300 border-t border-b border-gray-300">
						<div className="py-6">
							<h3 className="text-lg font-medium mb-1">Address</h3>
							<p className="text-sm">
								14011 Ventura Blvd, Suite 206E
								<br />
								Sherman Oaks, CA 91423
							</p>
						</div>
						<div className="py-6">
							<h3 className="text-lg font-medium mb-1">Telephone</h3>
							<p className="text-sm">818-290-7461</p>
						</div>
						<div className="py-6">
							<h3 className="text-lg font-medium mb-1">Email</h3>
							<p className="text-sm">info@impactmatters.com</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
