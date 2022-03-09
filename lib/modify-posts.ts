import type { IFullPost, IPost, IPostPreview } from "../types/post";
import { bodyToSummary } from "./body-to-summary";
import { idToDate } from "./id-to-date";
import { slugify } from "./slugify";

export const modifyPosts = (posts: IPost[]): IFullPost[] =>
  posts.map((post) => ({
    body: post.body,
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id),
  }));

export const modifyPostsForHome = (posts: IPost[]): IPostPreview[] =>
  posts.map((post) => ({
    id: post.id,
    title: post.title,
    userId: post.userId,
    slug: slugify(post.title),
    date: idToDate(post.id),
    summary: bodyToSummary(post.body),
  }));
