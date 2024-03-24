import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

type User =
  | {
      userName: string;
    }
  | undefined;

export function useUser() {
  return useSWR<User>("/user");
}

interface Cart {
  totalCost: string;
  products: string[];
}

export function useCart() {
  const { data } = useUser();
  return useSWR<Cart>(data ? "/cart" : null);
}

interface Product {
  id: number;
  title: string;
}

export function useProducts() {
  return useSWR<Product[]>("/products");
}

interface Post {
  id: number;
  title: string;
}

export function usePost(pageIndex: number) {
  return useSWR<Post[]>(`/posts?_limit=3&_page=${pageIndex}`);
}

interface Todo {
  id: number;
  checked: boolean;
  title: string;
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex + 1}&_limit=3`;
  };

  return useSWRInfinite<Todo[]>(getKey);
}
