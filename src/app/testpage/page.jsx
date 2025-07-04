import Link from "next/link";
import { client } from "../../sanity/lib/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
	const posts = await client.fetch(POSTS_QUERY, {}, options);
	console.log(posts);

	return (
		<main className="mx-auto min-h-screen max-w-3xl p-8">
			<h1 className="text-4xl font-bold mb-8">Posts</h1>
			<ul className="flex flex-col gap-y-4">
				{posts.map((post) => (
					<li className="hover:underline" key={post._id}>
						<Link href={`/${post.slug.current}`}>
							<h2 className="text-xl font-semibold">{post.title}</h2>
							<p className="text-xs font-semibold mb-2">
								{post.slug.current}
							</p>{" "}
							<p>{new Date(post.publishedAt).toLocaleDateString()}</p>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
