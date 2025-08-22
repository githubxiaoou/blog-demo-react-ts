import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { API_BASE_URL } from "./config";

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
  } = useFetch<Blog[]>(`${API_BASE_URL}/blogs`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
