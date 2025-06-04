import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
export default function TeamMember() {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-9 items-center justify-center">
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
			</div>

			<div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-9 items-center justify-center">
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
			</div>

			<div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-9 items-center justify-center">
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
				<TeamCard
					name="Dr. Varun"
					role="Senior Developer"
					categories={["Frontend", "Backend", "Cloud"]}
				/>
			</div>

			<Footer />
		</div>
	);
}
