import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/post-fetcher";
import type { ModifiedPost } from "../types/post";

export interface PostPageProps {
  post: ModifiedPost;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
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
  const posts = await getAllPosts();
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
