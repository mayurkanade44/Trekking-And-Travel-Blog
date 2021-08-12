import React from 'react'

const Login = () => {
    return (
      <div className="container">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput" style={{ color: "pink" }}>
            Email address
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
    );
}

export default Login
