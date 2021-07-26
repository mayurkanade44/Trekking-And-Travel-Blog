import React from "react";
import { useBlogsContext } from "../context/blogs_context";

const BlogsList = () => {
  const { blogs } = useBlogsContext();
  console.log(blogs)
  return (
    <div className="row">
      { blogs.map((blog)=>{
          return (
            <div key={blog.id} className="col col-lg-4 my-4">
              <h1>{blog.title}</h1>
              <img src="http://127.0.0.1:8000/media/default.jpg" alt="name" />
              <p>{blog.description}</p>
            </div>
          );
      })
        
      }
    </div>
  );
};

export default BlogsList;
