import Link from "next/link";
import {
	GraduationCap,
	Gavel,
	ArrowRightLeft,
	ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const TeamMember = ({
	name = "Alex Glancy",
	role = "Partner",
	education = [
		"J.D., Harvard Law School",
		"B.A. cum laude, Northwestern University, Phi Beta Kappa",
	],
	admission = "California",
	footerTag1 = "CREATIVE INDUSTRIES",
	footerTag2 = "COOPERATIVE & COMMUNITY OWNERSHIP",
}) => {
	return (
		<main className="min-h-screen bg-white font-sans text-black p-10">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12">
				{/* Left Side */}
				<div className="w-full md:w-1/2 space-y-8">
					<div className="space-y-2">
						<h1 className="text-4xl font-semibold text-green-900">{name}</h1>
						<p className="text-2xl text-gray-700">{role}</p>
					</div>

					<div className="space-y-6 lg:mt-[10rem]">
						<hr className="border-gray-300" />
						<div>
							<h2 className="text-sm font-semibold text-green-900">
								EDUCATION
							</h2>
							<div className="text-sm text-black space-y-1">
								{education.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
						</div>

						<div>
							<h2 className="text-sm font-semibold text-green-900">
								BAR ADMISSIONS
							</h2>
							<p className="text-sm text-black">{admission}</p>
						</div>
					</div>
				</div>

				{/* Right Side Image */}
				<div className="w-full md:w-1/2">
					<img
						src="https://placehold.co/600x400"
						alt="Profile Placeholder"
						className="w-full h-auto object-cover bg-gray-200"
					/>
					{/* Footer Tags */}
					<div className="mt-16 text-sm hidden md:flex text-gray-500 gap-10">
						<span>{footerTag1}</span>
						<span>{footerTag2}</span>
					</div>
				</div>
			</div>
		</main>
	);
};

const ProfessionalExperience = ({
	experiences = [
		{
			id: "01",
			title: "Professional Practice",
			desc: "Alex Glancy is a partner and founding attorney at Impact Matters Law, where she practices transactional law. Alex advises startups, social enterprises, impact-oriented companies, and creatives. She focuses in the areas of corporate structuring and governance, fundraising, business transactions, and intellectual property.",
		},
		{
			id: "02",
			title: "Business Entity Formation and Fundraising",
			desc: "Alex is experienced with the formation of business entities including LLCs, corporations, benefit corporations, nonprofits, and cooperatives. She also counsels on fundraising strategies and handles securities compliance at the federal and state levels.",
		},
		{
			id: "03",
			title: "Intellectual Property Leadership",
			desc: "In addition to her corporate and securities work, Alex leads the intellectual property (IP) practice. She counsels on copyright and trademark matters for entrepreneurs and creatives, including negotiating, reviewing, and drafting IP-related contracts of key importance to clients’ IP portfolios. She has represented production companies, consultants, and artists in these areas.",
		},
		{
			id: "04",
			title: "Education and Legal Background",
			desc: "Alex graduated from Harvard Law School, where she participated in the Community Enterprise Project. She holds a bachelor’s degree with honors from Northwestern University in Mathematical Methods in the Social Sciences (MMSS) and Anthropology. Prior to joining Impact Matters, she worked at the Arts Law Centre of Australia, the Office of the General Counsel of New York University, and at a global law firm.",
		},
		{
			id: "05",
			title: "Community Involvement and Languages",
			desc: "Born and raised in Los Angeles, Alex prides herself on being a community lawyer of service to her city. She has presented to groups at UCLA, CalArts, Otis College of Art and Design, and the California Center for Cooperative Development. Alex is proficient in Spanish.",
		},
	],
}) => {
	return (
		<section className="bg-white flex md:flex-row flex-col py-12 px-6 md:px-16 max-w-9xl mx-auto">
			<h1 className="text-xl font-bold text-green-900 mb-10">
				PROFESSIONAL EXPERIENCE
			</h1>

			<div>
				{experiences.map((item, index) => (
					<div key={item.id} className="md:ml-24 lg:ml-48 mb-10">
						<div className="flex md:flex-row flex-col lg:gap-12 items-start">
							<div className="min-w-[2rem] text-green-900 font-bold text-xl">
								{item.id}
							</div>
							<div>
								<h2 className="text-green-900 font-bold text-xl min-w-48 mb-1">
									{item.title}
								</h2>
							</div>
							<p className="text-sm text-gray-800">{item.desc}</p>
						</div>
						{index !== experiences.length - 1 && (
							<hr className="mt-6 border-gray-300" />
						)}
					</div>
				))}
			</div>
		</section>
	);
};

const ProfessionalAffiliation = ({
	experiences = [
		{ id: "01", title: "Member, California Lawyers Association" },
		{ id: "02", title: "Member, California Lawyers for the Arts" },
		{ id: "03", title: "Member, Center for Art Law" },
		{ id: "04", title: "Member, Cooperative Professionals Guild" },
		{ id: "05", title: "Member, The Copyright Society" },
	],
}) => {
	return (
		<div className="text-green-200 font-light bg-green-900 py-12 px-6 md:px-16 max-w-9xl mx-auto">
			<h1 className="text-xs font-semibold uppercase tracking-wider mb-10">
				Professional Affiliations
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="space-y-6">
					{experiences.map((item, index) => (
						<div key={item.id}>
							<div className="flex gap-6 items-start">
								<div className="min-w-[2rem] text-green-100 font-medium text-lg">
									{item.id}
								</div>
								<div className="text-base text-green-100">{item.title}</div>
							</div>
							{index !== experiences.length - 1 && (
								<hr className="mt-4 mb-4 border-green-100" />
							)}
						</div>
					))}
				</div>

				{/* Placeholder for image or graphic */}
				<div className="hidden md:block w-full h-80 bg-gray-300" />
			</div>
		</div>
	);
};

const PublicationsAndPracticeAreas = ({
  publications = [
    {
      id: "01",
      title:
        "“NFTs, Smart Contracts, & DAOs: A Resource for Creatives,” Center for Cultural Innovation, (March 2023)",
    },
    {
      id: "02",
      title:
        "Center for Cultural Innovation’s Letter to U.S. Copyright Office and U.S. Patent and Trademark Office Regarding Study on NFTs and Related Intellectual Property Law Issues (February 2023)",
    },
    {
      id: "03",
      title:
        "“Role of an Attorney [including Professional Responsibility]” [Co-Author] 2021 California Worker Cooperative Law Practice Guide, Sustainable Economies Law Center, (2021)",
    },
    {
      id: "04",
      title:
        "“Commercial Leases 101: A Legal Guide to Understanding Lease Agreements for Commercial Tenants” [Co-Author], Harvard Law School Community Enterprise Project, (Fall 2017)",
    },
  ],
  practiceAreas = [
    "Impact Investment Funds",
    "Cooperatives",
    "Intellectual Property",
  ],
}) => {
  return (
    <section className="px-6 md:px-16 max-w-9xl mx-auto py-12">
      {/* Publications */}
      <div>
        <h2 className="text-sm font-semibold text-green-900 uppercase mb-6">
          Publication
        </h2>
        {/* <hr className="bg-green-900 mb-6" /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px md:border-t-2 md:border-b-2 border-green-900">
          {publications.map((pub, index) => (
            <div
              key={pub.id}
              className={`p-6 flex flex-col ${
                index !== publications.length - 1 ? "lg:border-r-2  sm:border-b-0 border-b-2 border-green-900": ""
              }`}
            >
              <div className="text-green-800 font-light mb-12 text-5xl">
                {pub.id}
              </div>
              <div className="text-sm text-gray-900">{pub.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Areas */}
      <div className="mt-16">
        <h2 className="text-sm font-semibold text-gray-800 uppercase mb-6">
          Practice Areas
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          {practiceAreas.map((area) => (
            <a
              href="#"
              key={area}
              className="flex md:min-w-sm items-center justify-between gap-2 bg-green-900 text-green-100 hover:bg-green-800 px-4 py-3 rounded-md text-sm font-medium"
            >
              {area}
              <span className="bg-green-800 p-4 rounded-md text-green-300 text-lg">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};



export default function TeamProfile() {
	return (
		<div>
			<Navbar />
			<TeamMember />
			<ProfessionalExperience />
			<ProfessionalAffiliation />
			<PublicationsAndPracticeAreas />
			<Footer />
		</div>
	);
}
