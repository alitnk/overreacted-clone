import type { IFullPost, IPost, IPostPreview } from "../types/post";
import { bodyToSummary } from "./body-to-summary";
import { formatDate, idToDate } from "./id-to-date";
import { calculateReadTime } from "./read-time";
import { slugify } from "./slugify";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

/**
 * gets all the posts from the API (note that this code only runs on the next.js server)
 */
export const getAllPosts = async () => {
  const response = await fetch(POSTS_API);
  const posts = (await response.json()) as IPost[];
  return posts.sort((a, b) => b.id - a.id);
};

/**
 * gets all the posts and modifies them for the home page
 */
export const getAllPostsForHomePage = async (): Promise<IPostPreview[]> => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id).toString(),
    formattedDate: formatDate(idToDate(post.id)),
    summary: bodyToSummary(post.body),
    readTime: calculateReadTime(post.body),
  }));
};

/**
 * gets all the posts and modifies them for the post page
 */
export const getAllPostsForPostPage = async (): Promise<IFullPost[]> => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    body: post.body,
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id).toString(),
    formattedDate: formatDate(idToDate(post.id)),
    summary: bodyToSummary(post.body),
    readTime: calculateReadTime(post.body),
  }));
};
