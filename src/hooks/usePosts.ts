import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
}
interface Pages {
  page: number;
  pagesize: number;
}
const usePosts = (pagequery: Pages) => {
  return useQuery<Post[]>({
    queryKey: ["posts", pagequery],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/todos", {
          params: {
            _start: (pagequery.page- 1) * pagequery.pagesize,
            _limit: pagequery.pagesize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
};

export default usePosts;
