import { useNavigate, useParams } from "react-router-dom";
import type { Blog } from "./Home";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch<Blog>(`http://localhost:4000/blogs/${id}`);
  const navigate = useNavigate();

  function handleDelete(id: number): void {
    fetch(`http://localhost:4000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      navigate("/");
    });
  }

  return (
    <div className="blog-details">
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BlogDetails;
