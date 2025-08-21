import BlogList from "./BlogList";
import useFetch from "./useFetch";

export type Blog = {
  id: number;
  title: string;
  body: string;
  author: string;
};

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch<Blog[]>("http://localhost:4000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
