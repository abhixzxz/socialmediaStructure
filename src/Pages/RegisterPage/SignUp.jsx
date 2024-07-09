import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import RegisterVectorImg from "../../assets/images/register.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./RegisterPage.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  user_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  role_id: Yup.number().required("Required"),
  bio: Yup.string(),
  websiteUrl: Yup.string().url("Invalid URL"),
  imageUrl: Yup.string().url("Invalid URL"),
});

const RegisterPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      user_name: "",
      email: "",
      password: "",
      gender: "",
      dob: "",
      role_id: "",
      bio: "",
      websiteUrl: "",
      imageUrl: "",
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
    <div className="register-container">
      <div className="register-min-height">
        <div className="register-grid">
          <div className="register-card">
            <form onSubmit={formik.handleSubmit} className="register-form">
              <div className="full-width">
                <h3 className="register-title">Register</h3>
                <p className="register-description">
                  Create your account to explore a world of possibilities.
                </p>
              </div>
              <div className="formWrapperInputs">
                <div className="register-input-group">
                  <label className="register-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="register-input"
                    placeholder="Enter Name"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="register-error">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="register-input-group">
                  <label className="register-label" htmlFor="email">
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
                    className="register-input"
                    placeholder="Enter Email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="register-error">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>

              <div className="register-input-group">
                <label className="register-label" htmlFor="password">
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
                  className="register-input"
                  placeholder="Enter password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="register-error">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="register-input-group">
                <label className="register-label" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  required
                  className="register-input"
                >
                  <option value="" label="Select gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                  <option value="other" label="Other" />
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="register-error">{formik.errors.gender}</div>
                ) : null}
              </div>
              <div className="formWrapperInputs"></div>
              <div className="register-input-group">
                <label className="register-label" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  required
                  className="register-input"
                  placeholder="Enter Date of Birth"
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="register-error">{formik.errors.dob}</div>
                ) : null}
              </div>

              <div className="register-input-group full-width">
                <label className="register-label" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bio}
                  className="register-input"
                  placeholder="Enter Bio"
                />
                {formik.touched.bio && formik.errors.bio ? (
                  <div className="register-error">{formik.errors.bio}</div>
                ) : null}
              </div>

              <div className="register-input-group">
                <label className="register-label" htmlFor="websiteUrl">
                  Website URL
                </label>
                <input
                  id="websiteUrl"
                  name="websiteUrl"
                  type="url"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.websiteUrl}
                  className="register-input"
                  placeholder="Enter Website URL"
                />
                {formik.touched.websiteUrl && formik.errors.websiteUrl ? (
                  <div className="register-error">
                    {formik.errors.websiteUrl}
                  </div>
                ) : null}
              </div>

              <div className="register-input-group">
                <label className="register-label" htmlFor="imageUrl">
                  Image URL
                </label>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.imageUrl}
                  className="register-input"
                  placeholder="Enter Image URL"
                />
                {formik.touched.imageUrl && formik.errors.imageUrl ? (
                  <div className="register-error">{formik.errors.imageUrl}</div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="register-button"
              >
                {formik.isSubmitting ? "Registering..." : "Register"}
              </button>

              <p className="register-link">
                Already have an account?{" "}
                <Link to="/login" className="register-forgot-password">
                  Login here
                </Link>
              </p>
            </form>
          </div>

          <div className="register-image-container">
            <img
              src={RegisterVectorImg}
              className="register-image"
              alt="Register illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
