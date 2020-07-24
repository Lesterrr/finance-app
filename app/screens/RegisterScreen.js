import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";

import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import * as actions from "../store/actions";

const RegisterScreen = ({ isLoading, error, onAuth }) => {
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
      onSubmit={(values) => onAuth(values.email, values.password)}
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SubmitButton title="Sign Up" />
        )}
        <ErrorMessage error={error} visible={error !== null} />
      </React.Fragment>
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.loading,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) =>
      dispatch(actions.authenticate(email, password, true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
