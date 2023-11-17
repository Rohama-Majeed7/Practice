import { useState} from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pagesize = 10;
  const { page, setpage} = useState<number>(1);
  const { data } = usePosts({ page, pagesize });
  return (
    <>
      <div>
        <ul className="list-group">
          {data?.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setpage(page - 1) }>prev btn</button>
      <button onClick={() => setpage(page + 1)}>next btn</button>
    </>
  );
};

export default PostList;
