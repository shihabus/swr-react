"use client";

import React, { useState } from "react";
import Posts from "./Posts";

function PostWrapper() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <h3>Posts</h3>
      <Posts pageIndex={pageIndex} />
      <div style={{ display: "none" }}>
        <Posts pageIndex={pageIndex + 1} />
      </div>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}

export default PostWrapper;
