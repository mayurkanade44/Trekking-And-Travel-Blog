import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./blogs_reducer";

import { SET_LOADING, SET_BLOGS, SET_BLOG } from "../actions";

const initialState = {
  loading: false,
  blogs: [],
  blog: []
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

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider value={{ ...state, fetchBlogDetails }}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  return useContext(BlogsContext);
};
