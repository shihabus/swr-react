"use client";

import React from "react";
import { usePost } from "../services/queries";

function Posts({ pageIndex }: { pageIndex: number }) {
  const { data, error, isLoading } = usePost(pageIndex);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
