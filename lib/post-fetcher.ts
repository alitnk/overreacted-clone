import type { Post } from "../types/post";
import { modifyPosts } from "./modify-posts";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async () => {
  const response = await fetch(POSTS_API);
  const posts = (await response.json()) as Post[];
  return modifyPosts(posts);
};
