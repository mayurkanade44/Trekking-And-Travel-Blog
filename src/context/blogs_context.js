import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./blogs_reducer";

import {
  SET_LOADING,
  SET_BLOGS,
  SET_BLOG,
  TAG_LIST,
  CHANGE_DATA,
  ADD_BLOG,
} from "../actions";

const initialState = {
  loading: false,
  blogs: [],
  blog_details: [],
  tags: [],
  blog: {
    title: "",
    description: "",
    // tags: "",
    featured_image: null,
  },
};

const url = "http://127.0.0.1:8000/api/";
const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBlogs = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios(url + "blogs/");
      dispatch({ type: SET_BLOGS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogDetails = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios(`${url}blogs/${id}/`);
      dispatch({ type: SET_BLOG, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTagsList = async () => {
    try {
      const { data } = await axios(`${url}tags/`);
      dispatch({ type: TAG_LIST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = e.target.textContent;
    }
    if (name === "featured_image") {
      value = e.target.files[0];
    }
    dispatch({ type: CHANGE_DATA, payload: { name, value } });
  };

  const addBlog = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", state.blog.title);
    formData.append("description", state.blog.description);
    formData.append("featured_image", state.blog.featured_image);

    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const { data } = axios.post(`${url}blogs/`, formData, config);
      dispatch({ type: ADD_BLOG, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchTagsList();
  }, []);

  return (
    <BlogsContext.Provider value={{ ...state, fetchBlogDetails, handleChange, addBlog }}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  return useContext(BlogsContext);
};
