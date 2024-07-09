import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import LoginVectorImg from "../../assets/images/login.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./LoginPage.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Handle form submission
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-min-height">
        <div className="login-grid">
          <div className="login-card">
            <form onSubmit={formik.handleSubmit} className="login-form">
              <div>
                <h3 className="login-title">Sign in</h3>
                <p className="login-description">
                  Sign in to your account and explore a world of possibilities.
                </p>
              </div>

              <div className="login-input-group">
                <label className="login-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="login-input"
                  placeholder="Enter Email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="login-error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="login-input-group">
                <label className="login-label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                  className="login-input"
                  placeholder="Enter password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="login-error">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="login-options">
                <div className="login-checkbox">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="login-checkbox-input"
                  />
                  <label htmlFor="remember-me" className="login-checkbox-label">
                    Remember me
                  </label>
                </div>

                <Link to="/forgot-password" className="login-forgot-password">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="login-button"
              >
                {formik.isSubmitting ? "Logging in..." : "Log in"}
              </button>

              <p className="login-link">
                Don't have an account?{" "}
                <Link to="/register" className="login-forgot-password">
                  Register here
                </Link>
              </p>
            </form>
          </div>

          <div className="login-image-container">
            <img
              src={LoginVectorImg}
              className="login-image"
              alt="Login illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
