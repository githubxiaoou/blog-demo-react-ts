import React from "react";

type Blog = {
  id: number;
  title: string;
  body: string;
  author: string;
};

type BlogListProps = {
  title: string;
  blogs: Blog[];
  handleDelete?: (id: number) => void;
};

const BlogList = ({ title, blogs, handleDelete }: BlogListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {handleDelete && (
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
