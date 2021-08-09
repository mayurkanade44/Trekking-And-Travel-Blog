import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogsContext } from "../context/blogs_context";

const BlogDetails = () => {
  const { id } = useParams();
  const { fetchBlogDetails, blog } = useBlogsContext();
  const { title, featured_image, description, tags, owner } = blog;
  useEffect(() => {
    fetchBlogDetails(id);
  }, [id]);

  console.log(blog);

  return (
    <div className="detail-container">
      <h1 className="blog-title">{title}</h1>
      <p className='blog-owner'>{`by ${owner && owner.name}`}</p>
      <img
        className="blog-img"
        src={`http://127.0.0.1:8000${featured_image}`}
        alt=''
      />
      <h5>{description}</h5>
      {tags &&
        tags.map((tag) => {
          return <h4 key={tag.id}>{tag.name}</h4>;
        })}
    </div>
  );
};

export default BlogDetails;
