import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";
import noise from "../../assets/images/noise.svg";

const POSTS_PER_PAGE = 6;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

export default async function Blog({ searchParams }) {
	const page = parseInt(searchParams?.page || "1");
	const start = (page - 1) * POSTS_PER_PAGE;
	const end = start + POSTS_PER_PAGE;

	const POST_QUERY = `*[_type == "post"] | order(_createdAt desc){
		title,
		body,
		"slug": slug.current,
		"image": mainImage.asset._ref,
		"imagealt": mainImage.alt,
		categories[]->{ title },
		author->{ name, "authorimage": image.asset._ref },
		_createdAt
	}`;

	const allPosts = await client.fetch(POST_QUERY, { next: { revalidate: 30 } });
	const posts = allPosts.slice(start, end);
	const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

	if (!posts || posts.length === 0) {
		return (
			<div className="text-center py-20 text-gray-600">
				No blog posts found.
			</div>
		);
	}

	const getPlainText = (blocks) => {
		return blocks
			.map((block) =>
				block.children
					? block.children.map((child) => child.text).join(" ")
					: ""
			)
			.join(" ");
	};

	const truncateText = (text, wordLimit) => {
		const words = text.split(" ");
		if (words.length <= wordLimit) return text;
		return words.slice(0, wordLimit).join(" ") + "…";
	};

	return (
		<div className="bg-muted text-foreground">
			<Navbar />
			<section
				className="bg-green-950 min-h-screen"
				style={{
					backgroundImage: `url(${noise.src})`,
					backgroundSize: "cover",
					backgroundRepeat: "repeat",
					backgroundBlendMode: "overlay",
				}}
			>
				<h1 className="text-4xl font-bold text-center mb-10 text-amber-100">
					Our Blogs
        </h1>
        <h6 className="text-md text-muted text-center mb-10 text-amber-100">
          &quot; Impact Matters Law <br />provides creative legal solutions and support to businesses and <br /> organizations driving meaningful change &quot;
				</h6>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-8">
					{posts.map((post) => {
						const postImageUrl = post.image
							? urlFor(post.image)?.width(550).height(310).url()
							: null;
						const plainTextBody = truncateText(getPlainText(post.body), 20);
						const categories = post.categories
							?.map((cat) => cat.title)
							.join(", ");
						const authorImageUrl = post.author?.authorimage
							? urlFor(post.author.authorimage).width(32).height(32).url()
							: null;

						return (
							<div
								key={post.slug}
								className="flex flex-col justify-between h-full group rounded-2xl border bg-amber-50 shadow-sm overflow-hidden transition hover:shadow-md"
							>
								{postImageUrl && (
									<img
										src={postImageUrl}
										alt={post.imagealt || "Blog Post Image"}
										className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
									/>
								)}

								<div className="flex flex-col justify-between flex-grow p-6 space-y-3">
									<div>
										<h2 className="text-xl font-semibold tracking-tight line-clamp-2">
											{post.title}
										</h2>

										{/* Author Info */}
										<div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
											{authorImageUrl && (
												<img
													src={authorImageUrl}
													alt={post.author?.name || "Author"}
													className="w-8 h-8 rounded-full object-cover border"
												/>
											)}
											<span className="">
												By {post.author?.name || "Unknown"} <br/> <span className=" font-light text-md">Posted on{" "}
												{new Date(post._createdAt).toLocaleDateString()} |{" "}
												{categories || ""}</span>
											</span>
										</div>

										<p className="text-sm text-gray-700 mt-2 line-clamp-3">
											{plainTextBody}
										</p>
									</div>

									<div className="mt-4">
										<Link
											href={`/blog/${post.slug}`}
											className="inline-flex items-center gap-2 group text-amber-100 bg-green-950 hover:bg-green-800 px-4 py-2 rounded-md text-sm transition"
										>
											Read More{" "}
											<ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Pagination Controls */}
				<div className="flex justify-center items-center gap-4 my-10">
					{page > 1 && (
						<Link
							href={`?page=${page - 1}`}
							className="px-4 py-2 bg-amber-100 text-green-950 font-medium rounded hover:bg-amber-200"
						>
							← Previous
						</Link>
					)}
					{page < totalPages && (
						<Link
							href={`?page=${page + 1}`}
							className="px-4 py-2 bg-amber-100 text-green-950 font-medium rounded hover:bg-amber-200"
						>
							Next →
						</Link>
					)}
				</div>
			</section>
			<Footer />
		</div>
	);
}
