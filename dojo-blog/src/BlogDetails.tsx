import { useParams } from "react-router-dom";
import type { Blog } from "./Home";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch<Blog>(`http://localhost:4000/blogs/${id}`);

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BlogDetails;
