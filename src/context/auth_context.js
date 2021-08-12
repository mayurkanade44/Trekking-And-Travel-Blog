import React, { createContext, useContext, useReducer } from "react";
import reducer from "./auth_reducer";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { CHANGE_DATA, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions";

const url = "http://127.0.0.1:8000/api/";
const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: false,
  loading: false,
  user: {
    name: "",
    username: "",
    email: "",
    password: "",
  },
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({ type: CHANGE_DATA, payload: { name, value } });
  };

  const register = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = axios.post(`${url}register/`, state.user, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = axios.post(
        `${url}login/`,
        { username: state.user.username, password: state.user.password },
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log('success')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, handleChange, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
