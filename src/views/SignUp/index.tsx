import useSignUpController from "./Controllers/useSignUpController";
import { BoltIcon, LoginWrapper } from "#views/Login/Login.Styled";
import { Link } from "react-router-dom";
import { SignUpContainer } from "./SignUp.Styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const {
    handleInputChange,
    formData,
    handleFormSubmit,
    checkbox,
    toggleCheckbox,
    error,
  } = useSignUpController();

  return (
    <SignUpContainer>
      <LoginWrapper>
        <ToastContainer autoClose={500} />
        <form onSubmit={handleFormSubmit} className="login-form">
          <div className="bolt-icon">
            <BoltIcon></BoltIcon>
          </div>

          <h2>Sign Up</h2>

          <h4>Crafting Memorable Event Experiences.</h4>

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
              placeholder="User name"
              style={error?.usernameError ? { border: "1px solid coral" } : {}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="on"
              placeholder="Email"
              style={error?.emailError ? { border: "1px solid coral" } : {}}
            />
          </div>

          <div className="form-group form-group-password">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input
              // type={showPassword ? "password" : "text"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              autoComplete="on"
              style={error?.passwordError ? { border: "1px solid coral" } : {}}
            />
          </div>

          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              value={`${checkbox}`}
              onChange={toggleCheckbox}
              id="checkbox"
            />

            <label htmlFor="checkbox" className="not-registered">
              I agree to the <span className="terms">Terms & Conditions</span>
            </label>
          </div>

          <button
            style={!checkbox ? { opacity: "0.8" } : {}}
            type="submit"
            className="login"
            disabled={!checkbox}
          >
            Sign Up
          </button>

          <span className="not-registered">
            Already have an account?<Link to="/login">Sign In</Link>
          </span>

          <span className="copyright">©2024 Events. All rights reserved.</span>
        </form>

        <div className="image-container"></div>
      </LoginWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
