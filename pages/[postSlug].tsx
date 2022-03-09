import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { DarkModeToggle } from "../components/DarkModeToggle/DarkModeToggle";
import { DefaultLayout } from "../components/DefaultLayout/DefaultLayout";
import { getAllPostsForPostPage } from "../lib/post-fetcher";
import type { IFullPost } from "../types/post";

export interface PostPageProps {
  post: IFullPost;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-between items-center">
          <h1 className="font-black text-2xl text-pink-weak">
            <Link href="/">Overreacted</Link>
          </h1>
          <DarkModeToggle />
        </div>

        <div className="mt-14">
          <h1 className="text-5xl font-black">{post.title}</h1>
          <div className="mt-4">
            <small className="block text-xs">
              {post.formattedDate} •{" "}
              {Array(post.readTime.degree).fill("☕️").join("")}{" "}
              {post.readTime.mins} min read
            </small>
          </div>
          <p className="mt-8">{post.body}</p>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsForPostPage();
  return {
    fallback: false,
    paths: posts.map((post) => ({ params: { postSlug: post.slug } })),
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const postSlug = params?.postSlug;
  if (typeof postSlug !== "string") {
    return { notFound: true };
  }
  const posts = await getAllPostsForPostPage();
  const post = posts.find((post) => post.slug === postSlug);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: {
      post,
    },
  };
};
