import {
  SET_LOADING,
  SET_BLOGS,
  SET_BLOG,
  TAG_LIST,
  CHANGE_DATA,
  ADD_BLOG
} from "../actions";

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
        blog_details: action.payload,
      };
    case TAG_LIST:
      return {
        ...state,
        tags: action.payload,
      };
    case CHANGE_DATA:
      const { name, value } = action.payload;
      return {
        ...state,
        blog: { ...state.blog, [name]: value },
      };
      case ADD_BLOG:
        return {
          ...state,
        }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default blogs_reducer;
