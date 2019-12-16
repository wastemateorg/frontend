import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./login.css";
import loginImg from "../image/login.png";

function RegisterForm({ values, errors, touched, isSubmitting }) {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <img src={loginImg} alt="blimp" />
      <Form>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username </label>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, username, tos, meal }) {
    return {
      email: email || "",
      password: password || "",
      username: username || "",
      tos: tos || false,
      meal: meal || "silver"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "wastemate@gmail.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("our database url here", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(RegisterForm);

export default FormikLoginForm;
