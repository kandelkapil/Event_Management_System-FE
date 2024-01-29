import React from "react";
import useLoginController from "./Controllers/useLoginController";
import {
  LoginContainer,
  LoginWrapper,
  BoltIcon,
  EyeCross,
  EyeShow,
} from "./Login.Styled";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles

const Login = () => {
  const {
    handleInputChange,
    formData,
    handleFormSubmit,
    showPassword,
    handlePasswordToggle,
    error,
  } = useLoginController();

  return (
    <LoginContainer>
      <ToastContainer autoClose={500} />
      <LoginWrapper>
        <form onSubmit={handleFormSubmit} className="login-form">
          <div className="bolt-icon">
            <BoltIcon></BoltIcon>
          </div>

          <h2>Login</h2>
          <h4>Join Us, Spark Joy.</h4>
          <div className="form-group">
            <label htmlFor="username">
              Username <span>*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              autoComplete="on"
              placeholder="username"
              style={error?.usernameError ? { border: "1px solid coral" } : {}}
            />
          </div>

          <div className="form-group form-group-password">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Min. 8 characters"
              autoComplete="on"
              style={error?.passwordError ? { border: "1px solid coral" } : {}}
            />

            {!showPassword ? (
              <EyeShow onClick={handlePasswordToggle} />
            ) : (
              <EyeCross onClick={handlePasswordToggle} />
            )}
          </div>

          <button type="submit" className="login">
            Login
          </button>

          <span className="not-registered">
            Not registered Yet?<Link to="/signup">Create Account</Link>
          </span>

          <span className="copyright">©2024 Events. All rights reserved.</span>
        </form>

        <div className="image-container"></div>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
