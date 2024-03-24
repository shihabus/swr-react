"use client";

import React from "react";
import { useCart, useUser } from "../services/queries";

function Cart() {
  const userQuery = useUser();
  const cartQuery = useCart();

  if (cartQuery.isLoading || userQuery.isLoading) return <div>Loading...</div>;

  if (!userQuery.data?.userName) return <p>User not found</p>;

  return (
    <div>
      <p>Username: {userQuery.data?.userName}</p>
      <p>Total: {cartQuery.data?.totalCost}</p>
    </div>
  );
}

export default Cart;
