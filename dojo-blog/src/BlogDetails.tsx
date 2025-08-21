import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return <div className="blog-details">BlogDetails {id}</div>;
};

export default BlogDetails;
