import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import * as actions from "../store/actions";
import Text from "../components/Text";

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
    <View style={styles.container}>
      <Text style={styles.greetings}>Create Account</Text>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => onAuth(values.email, values.password)}
        validationSchema={RegisterSchema}
      >
        <React.Fragment>
          <FormField
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            name="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormField
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            textContentType="password"
            secureTextEntry={true}
          />
          <FormField
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  greetings: {
    fontSize: 25,
  },
});

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
