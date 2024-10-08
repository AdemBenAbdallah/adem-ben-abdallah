import { posts } from "#site/content";
import { MDXContent } from "@/components/global/mdx-components";
import { Tag } from "@/components/ui/post-item";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose prose-slate max-w-3xl mx-auto dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.tags ? post.tags.map((tag) => <Tag key={tag} tag={tag} />) : null}
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
