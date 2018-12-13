import * as React from "react";
import { Link } from "gatsby";

interface BlogPostCardProps {
  postTitle?: string;
  postExcerpt?: string;
  postedDate?: string;
  postReadTime?: number;
  postCommentCount?: number;
  postSlug: string;
}

export default ({
  postTitle,
  postExcerpt,
  postedDate,
  postReadTime,
  postCommentCount,
  postSlug
}: BlogPostCardProps) => {
  return (
    <div>
      <Link to={postSlug}>
        <h1>{postTitle}</h1>
      </Link>
      <p>{postExcerpt}</p>
      <div>
        <time>{postedDate}</time>
        <i>{postReadTime} min</i>
        <span> {postCommentCount} Comments</span>
      </div>
    </div>
  );
};
