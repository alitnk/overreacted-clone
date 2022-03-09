import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DarkModeToggle } from "../components/DarkModeToggle/DarkModeToggle";
import { DefaultLayout } from "../components/DefaultLayout/DefaultLayout";
import { PostPreview } from "../components/PostPreview/PostPreview";
import { getAllPostsForHomePage } from "../lib/post-fetcher";
import type { IPostPreview } from "../types/post";

export interface HomePageProps {
  posts: IPostPreview[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Overreacted — A blog by Dan Abramov</title>
        <meta
          name="description"
          content="A clone of Dan Abramov's blog, Overreacted.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex justify-between items-center">
          <h1 className="font-black text-4xl">Overreacted</h1>
          <DarkModeToggle />
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <Image
            src="/profile-pic.jpg"
            alt="Dan Abramov's Profile Picture"
            width={64}
            height={64}
            className="rounded-full"
          />
          <p className="text-lg max-w-[270px]">
            Personal blog by{" "}
            <a
              href="https://mobile.twitter.com/dan_abramov"
              className="text-pink-weak underline"
            >
              Dan Abramov.
            </a>{" "}
            I explain with words and code.
          </p>
        </div>
        <div className="space-y-12 mt-20">
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="mt-24">
        <div className="flex justify-between">
          <div>
            <a
              href="https://mobile.twitter.com/dan_abramov"
              className="text-pink-weak underline"
            >
              twitter
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/gaearon"
              className="text-pink-weak underline"
            >
              github
            </a>{" "}
            •{" "}
            <a
              href="https://stackoverflow.com/users/458193/dan-abramov"
              className="text-pink-weak underline"
            >
              stack overflow
            </a>
          </div>
          <div>
            <a
              href="https://overreacted.io/rss.xml"
              className="text-pink-weak underline"
            >
              rss
            </a>
          </div>
        </div>
      </footer>
    </DefaultLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      posts: await getAllPostsForHomePage(),
    },
  };
};
