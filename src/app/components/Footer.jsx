import Link from "next/link";
import noise from "../../assets/images/noise.svg";

export default function Footer() {
	return (
		<footer
			// style={{
			// 	backgroundImage: `url(${noise.src})`,
			// 	backgroundSize: "cover",
			// 	backgroundRepeat: "repeat",
      //   backgroundBlendMode: "overlay",
			// }}
			className="footer bg-gradient-to-b from-[#dbceb4] to-[#c8b894] text-green-950 px-6 py-12 space-y-12"
		>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
				{/* Logo and intro */}
				<div className="space-y-4">
					<div className="border-t-2 border-b-2 border-green-950 inline-block py-1">
						<p className="font-semibold leading-tight">IMPACT</p>
						<p className="font-semibold leading-tight">MATTERS</p>
						<p className="font-semibold leading-tight">LAW LLP</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mt-4">Ready To Make An Impact?</h3>
						<p className="mt-2 text-sm leading-relaxed">
							Let’s work together to bring your vision to life. Whether you’re
							seeking legal expertise or exploring ways to collaborate,{" "}
							<strong>we’re here to help.</strong>
						</p>
					</div>
				</div>

				{/* Contact */}
				<div className="font-semibold flex flex-col">
					<h4 className="font-bold mb-2">GET IN TOUCH</h4>
					<Link href="#" className="text-sm">info@impactmatters.com</Link>
					<Link href="#" className="text-sm mb-2">IMPACTMATTERS.COM</Link>
					<Link href="#" className="text-sm">818-290-7461</Link>
					<p className="text-sm mt-2">
						3415 S. Sepulveda Blvd.,
						<br />
						Suite 420,
						<br />
						Los Angeles, CA 90034
					</p>
				</div>

				{/* Social */}
				<div>
					<h4 className="font-bold mb-2">FOLLOW</h4>
					<ul className="text-sm space-y-1 font-semibold">
						<li>
							<Link href="#">FACEBOOK</Link>
						</li>
						<li>
							<Link href="#">INSTAGRAM</Link>
						</li>
						<li>
							<Link href="#">LINKEDIN</Link>
						</li>
					</ul>
				</div>

				{/* Site Navigation */}
				<div className="space-y-1">
					<h4 className="font-bold mb-2">Navigation</h4>
					<ul className="text-sm space-y-1 font-semibold">
						<li>
							<Link href="#">Impact</Link>
						</li>
						<li>
							<Link href="#">
								Practice Areas
							</Link>
						</li>
						<li>
							<Link href="#">Team</Link>
						</li>
						<li>
							<Link href="#">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom large text */}
			<div className="text-[16vw] md:text-[10vw] font-bold text-[#F2EFEB] opacity-80 leading-none text-center">
				impactMatters
			</div>

			{/* Bottom bar */}
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-950 border border-green-950 rounded-full px-6 py-2 max-w-7xl mx-auto">
				<p>@2025 IMPACT MATTER LAW LLP</p>
				<div className="flex gap-4 flex-wrap justify-center">
					<Link href="#">DISCLAIMER</Link>
					<Link href="#">ATTORNEY ADVERTISING</Link>
					<Link href="#">PRIVACY</Link>
					<Link href="#">COOKIES</Link>
				</div>
			</div>
		</footer>
	);
}
