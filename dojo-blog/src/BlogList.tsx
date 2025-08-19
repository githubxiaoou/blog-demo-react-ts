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
};

const BlogList = ({ title, blogs }: BlogListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
