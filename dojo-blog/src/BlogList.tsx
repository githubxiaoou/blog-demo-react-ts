import { Link } from "react-router-dom";

type Blog = {
  id: number;
  title: string;
  body: string;
  author: string;
};

type BlogListProps = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
