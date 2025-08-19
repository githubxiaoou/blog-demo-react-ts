import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:4000/blogs");
      const data = await response.json();
      setBlogs(data);
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
