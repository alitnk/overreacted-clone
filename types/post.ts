import type { IReadTime } from "./read-time";

/**
 * unmodified post retrieved from the API
 */
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * for post page
 */
export interface IFullPost extends IPost {
  slug: string;
  date: string; // can't use Date since the value gets serialized
  formattedDate: string;
  readTime: IReadTime;
  summary: string;
}

/**
 * for home page
 */
export interface IPostPreview extends Omit<IFullPost, "body"> {}
