import { CHANGE_DATA, REGISTER_SUCCESS } from "../actions";

const auth_reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      const { name, value } = action.payload;
      return {
        ...state,
        user: { ...state.user, [name]: value },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default auth_reducer;
