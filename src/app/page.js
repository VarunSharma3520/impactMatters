import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Home2 from "./components/Home2";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";
export default function Home() {
	return (
		<div className="">
			<nav>
				<Navbar />
				<HeroSection />
				<Home2 />
				<Home5 />
				<Home6 />
				<Footer />
			</nav>
		</div>
	);
}
