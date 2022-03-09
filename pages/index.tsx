import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/post-fetcher";
import { ModifiedPost } from "../types/post";

export interface HomePageProps {
  posts: ModifiedPost[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Overreacted</title>
        <meta
          name="description"
          content="A clone of Dan Abramov's blog, Overreacted.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
};
