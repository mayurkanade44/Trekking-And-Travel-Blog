import React from "react";
import { useBlogsContext } from "../context/blogs_context";

const NewBlog = () => {
  const { tags, blog, handleChange, addBlog } = useBlogsContext();

  return (
    <div className="container my-5">
      <form onSubmit={addBlog}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <h3>Title</h3>
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <h3>Description</h3>
          </label>
          <div className="col-sm-8">
            <textarea
              type="textarea"
              rows="15"
              className="form-control"
              name="description"
              value={blog.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <h3>Upload Image</h3>
          </label>
          <input
            type="file"
            accept="image/*"
            className="col-sm-5 mt-3"
            name="featured_image"
            onChange={handleChange}
          />
        </div>
        {/* <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            <h3>Tags</h3>
          </label>
          <div className="col-sm-3">
            <select
              className="form-select"
              name='tags'
              value={blog.tags}
              onChange={handleChange}
            >
              {tags.map((tag) => {
                return <option key={tag.id} value={tag.name}>{tag.name}</option>;
              })}
            </select>
          </div>
        </div> */}
        <button className="btn btn-primary" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
