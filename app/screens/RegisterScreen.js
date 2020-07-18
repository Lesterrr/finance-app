import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

const RegisterScreen = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required().label("Email"),
    password: Yup.string().required().label("Password"),
    confirmPassword: Yup.string()
      .required()
      .label("Confirm password")
      .oneOf([Yup.ref("password"), null], "Password doesn't match"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      onSubmit={(values) => console.log(values.email, values.password)}
      validationSchema={RegisterSchema}
    >
      <React.Fragment>
        <AppFormField
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          textContentType="password"
          secureTextEntry={true}
        />
        <AppFormField
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="confirmPassword"
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="Sign Up" />
      </React.Fragment>
    </Formik>
  );
};

export default RegisterScreen;
