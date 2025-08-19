import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:4000/blogs");
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
