import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import NotFound from "../../components/NotFound";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { User } from "lucide-react";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

export default async function PostPage({ params }) {
	const { slug } = params;

	const POST_QUERY = `*[
		_type == "post" && slug.current == $slug
	]{
		title,
		body,
		"image": mainImage.asset._ref,
		"imagealt": mainImage.alt,
		categories[]->{ title },
		author->{ name },
		_createdAt
	}`;

	const posts = await client.fetch(
		POST_QUERY,
		{ slug },
		{ next: { revalidate: 30 } }
	);

	if (!posts || posts.length === 0) {
		return <NotFound />;
	}

	const post = posts[0];

	const postImageUrl = post.image
		? urlFor(post.image)?.width(550).height(310).url()
		: null;

	const components = {
		types: {
			image: ({ value }) => {
				const imageUrl = urlFor(value).width(800).url(); // Adjust width as needed
				const altText = value.alt || "Image";

				return (
					<div className="my-6">
						<img
							src={imageUrl}
							alt={altText}
							className="rounded-lg shadow-md mx-auto"
						/>
						{value.caption && (
							<p className="text-center text-sm text-gray-500 mt-2">
								{value.caption}
							</p>
						)}
					</div>
				);
			},
			// Add other custom block types if needed
		},
		block: {
			h1: ({ children }) => (
				<h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
			),
			h2: ({ children }) => (
				<h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
			),
			h3: ({ children }) => (
				<h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
			),
			h4: ({ children }) => (
				<h4 className="text-xl font-normal mt-2 mb-1">{children}</h4>
			),
			h5: ({ children }) => (
				<h5 className="text-lg font-light mt-1 mb-0.5">{children}</h5>
			),
			h6: ({ children }) => (
				<h6 className="text-base font-thin mt-0.5 mb-0">{children}</h6>
			),
			normal: ({ children }) => <p className="mb-4">{children}</p>,
			blockquote: ({ children }) => (
				<blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
					{children}
				</blockquote>
			),
		},
		list: {
			bullet: ({ children }) => (
				<ul className="list-disc list-inside pl-5">{children}</ul>
			),
			number: ({ children }) => (
				<ol className="list-decimal list-inside pl-5">{children}</ol>
			),
		},
		listItem: {
			bullet: ({ children }) => <li className="mb-1">{children}</li>,
			number: ({ children }) => <li className="mb-1">{children}</li>,
		},
		marks: {
			strong: ({ children }) => (
				<strong className="font-semibold">{children}</strong>
			),
			em: ({ children }) => <em className="italic">{children}</em>,
			code: ({ children }) => (
				<code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
					{children}
				</code>
			),
			link: ({ value, children }) => {
				const { href } = value;
				return (
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 underline"
					>
						{children}
					</a>
				);
			},
		},
	};

	return (
		<div className="post bg-[#FFFBEB] text-green-950">
			<Navbar />
			<main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
				{postImageUrl && (
					<img
						src={postImageUrl}
						alt={post.imagealt || post.title}
						className="aspect-video rounded-xl"
						width="550"
						height="310"
					/>
				)}
				<h1 className="text-4xl font-bold mb-8">{post.title}</h1>
				<div className="space-y-4 text-gray-800">
					<p className="text-sm text-gray-500">
						Published:{" "}
						{new Date(post._createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					{post.author?.name && (
						<p className="flex items-center gap-2 text-sm text-gray-700">
							<User className="w-4 h-4 text-gray-500" />
							<span>{post.author.name}</span>
						</p>
					)}

					{post.categories?.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{post.categories.map((cat) => (
								<span
									key={cat.title}
									className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
								>
									{cat.title}
								</span>
							))}
						</div>
					)}

					{Array.isArray(post.body) && (
						<PortableText components={components} value={post.body} />
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
