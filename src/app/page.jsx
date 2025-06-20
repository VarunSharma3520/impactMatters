import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<HeroSection />
			<Home2 />
			<Home4 />
			<Home3 />
			<Home5 />
			<Home6 />
			<Footer />
		</div>
	);
}
