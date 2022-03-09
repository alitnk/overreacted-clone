export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IFullPost extends IPost {
  slug: string;
  date: string; // can't use Date since the value gets serialized
  summary: string;
}

export interface IPostPreview extends Omit<IFullPost, "body"> {}
