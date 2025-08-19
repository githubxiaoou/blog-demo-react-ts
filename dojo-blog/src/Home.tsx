import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsPending(true);
        const response = await fetch("http://localhost:4000/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setIsPending(false);
      }
    };
    setTimeout(() => {
      fetchBlogs();
      setIsPending(false);
    }, 1000); // Simulate a delay
  }, []);

  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
