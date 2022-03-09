export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ModifiedPost extends Post {
  slug: string;
  date: string; // can't use Date since the value gets serialized
}
