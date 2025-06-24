"use client";
import Link from "next/link";
import noise from "../../assets/images/noise.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
		});
	}, []);

  return (
    <main
      className="bg-green-950 text-neutral-100 px-4 py-12 flex items-baseline-last justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh]"
      style={{
        backgroundImage: `url(${noise.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center max-w-5xl px-4">
        <h1 data-aos="fade-up" className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-100 font-bold leading-tight tracking-tight">
          Impact Matters
        </h1>
      </div>
    </main>
  );
}
