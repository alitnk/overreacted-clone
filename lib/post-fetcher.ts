import type { IFullPost, IPost, IPostPreview } from "../types/post";
import { bodyToSummary } from "./body-to-summary";
import { idToDate } from "./id-to-date";
import { slugify } from "./slugify";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async () => {
  const response = await fetch(POSTS_API);
  const posts = (await response.json()) as IPost[];
  return posts;
};

export const getAllPostsForHomePage = async (): Promise<IPostPreview[]> => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id),
    summary: bodyToSummary(post.body),
  }));
};

export const getAllPostsForPostPage = async (): Promise<IFullPost[]> => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    body: post.body,
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id),
    summary: bodyToSummary(post.body),
  }));
};
