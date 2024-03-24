"use client";

import React from "react";
import { useTodos } from "../services/queries";

function Todos() {
  const { data, setSize, size } = useTodos();

  if (!data) return <p>Loading..</p>;

  return (
    <div>
      {data.map((todos) => {
        return todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  );
}

export default Todos;
