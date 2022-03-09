import type { IReadTime } from "./read-time";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IFullPost extends IPost {
  slug: string;
  date: string; // can't use Date since the value gets serialized
  formattedDate: string;
  readTime: IReadTime;
  summary: string;
}

export interface IPostPreview extends Omit<IFullPost, "body"> {}
