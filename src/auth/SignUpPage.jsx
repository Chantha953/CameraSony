import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ transform: "translateY(5.4rem)" }}
      >
        <form
          className="border signUp p-5 text-center text-white rounded-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          <i
            class="fa-regular fa-circle-xmark position-absolute fs-3 fw-bold top-0 end-0 m-3"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          ></i>
          <h1 className="mb-5 mt-2">Sign Up</h1>
          <div>
            <input
              value={name}
              type="text"
              required
              className="form-control bg-transparent rounded-5 signUpName text-white fs-5 px-4"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="position-relative mt-4">
            <input
              value={email}
              type="email"
              required
              className="form-control bg-transparent rounded-5 signUpEmail text-white fs-5 px-4"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i
              class="fa-solid fa-envelope position-absolute fs-5"
              style={{ top: "13px", right: "20px" }}
            ></i>
          </div>
          <div className="mt-4 position-relative">
            <input
              value={password}
              type={showPassword ? "text" : "password"}
              required
              className="form-control bg-transparent rounded-5 text-white fs-5 px-4 signUpPassword"
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              class={`${
                showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
              } position-absolute fs-5`}
              style={{ top: "13px", right: "20px", cursor: "pointer" }}
            ></i>
          </div>
          <div className="mt-4 position-relative">
            <input
              value={ConfirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              required
              className="form-control bg-transparent rounded-5 text-white fs-5 px-4 signUpPassword"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              class={`${
                showConfirmPassword
                  ? "fa-solid fa-eye"
                  : "fa-solid fa-eye-slash"
              } position-absolute fs-5`}
              style={{ top: "13px", right: "20px", cursor: "pointer" }}
            ></i>
          </div>
          <div className="mt-4 ms-2 text-start d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label
                className="form-check-label text-white ms-3"
                htmlFor="rememberMe"
                style={{ cursor: "pointer" }}
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="SignUp mt-4">
            <button className="btn btnSignUp text-white border rounded-5 w-100 fw-medium">
              Sign Up
            </button>
          </div>
          <div className="mt-4">
            <p>
              Already have an account?
              <Link
                to="/signin"
                className="text-white fw-bold text-decoration-none ms-1"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
