import Link from "next/link";
import noise from "../../assets/images/noise.svg";

export default function HeroSection() {
  return (
    <main
      className="bg-green-950 text-neutral-100 px-6 flex items-end justify-center min-h-96 md:min-h-[60vh] py-8"
      style={{
        backgroundImage: `url(${noise.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-100 font-bold text-center">
        Impact Matters
      </h1>
    </main>
  );
}
