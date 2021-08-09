import { SET_LOADING, SET_BLOGS, SET_BLOG } from "../actions";

const blogs_reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_BLOGS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case SET_BLOG:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default blogs_reducer;
