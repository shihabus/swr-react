"use client";

import React, { ChangeEvent, useState } from "react";
import { useProducts } from "../services/queries";
import { axiosInstance } from "../services/fetcher";
import { useCreateProduct } from "../services/mutations";

function Products() {
  const { data, mutate, isValidating } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  const [input, setInput] = useState("");

  const addProduct = async () => {
    // axiosInstance.post("/products", {
    //   title: input,
    // });
    // mutate();

    trigger(
      { title: input },
      {
        optimisticData: data && [...data, { title: input }],
        rollbackOnError: true,
      }
    );
    setInput("");
  };

  return (
    <div>
      <p>Products</p>
      <input
        type="text"
        placeholder="Product Name"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={addProduct}
        disabled={input.length < 1 || isValidating || isMutating}
      >
        {(isValidating || isMutating) ? "Creating Product" : "Create Product"}
      </button>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
