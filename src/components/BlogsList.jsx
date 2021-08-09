import React from "react";
import { useBlogsContext } from "../context/blogs_context";
import { Link } from "react-router-dom";

const BlogsList = () => {
  const { blogs } = useBlogsContext();
  console.log(blogs);
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="col col-lg-4 my-4">
              <h1>{blog.title}</h1>
              <Link to={`/blogs/${blog.id}`}>
                <img
                  className="img-fluid"
                  style={{ width: 300 }}
                  src={`http://127.0.0.1:8000${blog.featured_image}`}
                  alt="name"
                />
              </Link>
              <p>{`by ${blog.owner.name}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;
