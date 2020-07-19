import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";

import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import * as actions from "../store/actions/auth";

const LoginScreen = ({ isLoading, error, onAuth }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required().label("Email"),
    password: Yup.string().required().label("Password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => onAuth(values.email, values.password)}
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <SubmitButton title="Sign In" />
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
      dispatch(actions.authenticate(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
