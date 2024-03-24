"use client";

type Posts = {
  id: number;
  title: string;
};

import { useEffect, useState } from "react";

function Old() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then(({ data }) => setPosts(data.posts));
  }, []);

  if (!posts.length) return <p>Loading.....</p>;

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default Old;
