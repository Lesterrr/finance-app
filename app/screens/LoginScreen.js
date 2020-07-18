import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";

const LoginScreen = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required().label("Email"),
    password: Yup.string().required().label("Password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values.email, values.password)}
      validationSchema={LoginSchema}
    >
      <React.Fragment>
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          name="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <AppFormField
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
          name="password"
        />
        <SubmitButton title="Sign In" />
      </React.Fragment>
    </Formik>
  );
};

export default LoginScreen;
