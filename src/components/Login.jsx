import React from "react";
import { useAuthContext } from "../context/auth_context";

const Login = () => {
  const {user, login, handleChange} = useAuthContext()
  const {username, password} = user
  return (
    <div className="position-absolute top-50 start-50 translate-middle border border-info p-5">
      <h1 className="text-center mb-5">Login</h1>
      <form onSubmit={login}>
        <div className="form-floating mb-4">
          <input
            type="username"
            className="form-control"
            placeholder="name@example.com"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <label style={{ color: "blue" }}>Username</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <label style={{ color: "blue" }}>Password</label>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
