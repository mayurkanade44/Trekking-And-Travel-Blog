import React from "react";
import { useAuthContext } from "../context/auth_context";

const Register = () => {
  const { user, handleChange, register } = useAuthContext();
  const { name, username, email, password} = user;
  

  return (
    <div className="position-absolute top-50 start-50 translate-middle border border-info px-4 py-2">
      <h1 className="text-center my-4">Register</h1>
      <form onSubmit={register}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="abc@xyz.com"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <div className="form-text">
            Your password must be 8-20 characters long.
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mb-2">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
