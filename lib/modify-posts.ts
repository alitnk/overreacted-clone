import type { ModifiedPost, Post } from "../types/post";
import { idToDate } from "./id-to-date";
import { slugify } from "./slugify";

export const modifyPosts = (posts: Post[]): ModifiedPost[] =>
  posts.map((post) => ({
    ...post,
    slug: slugify(post.title),
    date: idToDate(post.id),
  }));
