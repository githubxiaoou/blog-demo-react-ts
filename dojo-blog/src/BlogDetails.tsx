import { useNavigate, useParams } from "react-router-dom";
import type { Blog } from "./Home";
import useFetch from "./useFetch";
import { API_BASE_URL } from "./config";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog } = useFetch<Blog>(`${API_BASE_URL}/blogs/${id}`);
  const navigate = useNavigate();

  function handleDelete(id: number): void {
    fetch(`${API_BASE_URL}/blogs/${id}`, {
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
