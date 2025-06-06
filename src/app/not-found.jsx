import Link from "next/link";
import { MoveRight } from "lucide-react";
import noise from "../assets/images/noise.svg";

export default function NotFound() {
  return (
    <div
      className="flex justify-center items-center text-white bg-green-950 min-h-screen px-4"
      style={{
        backgroundImage: `url(${noise.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
        <h2 className="text-4xl md:text-7xl font-bold tracking-wide animate-slide-up">
          404 | Not Found
        </h2>
        <p className="text-md md:text-lg text-green-100 animate-fade-in-slow">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-white text-green-950 font-semibold shadow-md transition hover:bg-green-100"
        >
          Return Home <MoveRight />
        </Link>
      </div>
    </div>
  );
}
