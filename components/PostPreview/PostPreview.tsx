import Link from "next/link";
import type { IPostPreview } from "../../types/post";

export interface PostPreviewProps {
  post: IPostPreview;
}

export const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <div>
      <h2 className="text-3xl font-black text-pink-500">
        <Link href={`/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className="mt-2">
        <small className="text-xs">
          {post.date} • {Array(post.readTime.degree).fill("☕️").join("")}{" "}
          {post.readTime.mins} min read
        </small>
      </div>
      <p className="mt-1">{post.summary}</p>
    </div>
  );
};
