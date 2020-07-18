import React from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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
      onSubmit={(values) => onAuth(values.email, values.password)}
      validationSchema={RegisterSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <React.Fragment>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
          />
          <Text>{errors.email}</Text>
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            placeholder="Password"
          />
          <Text>{errors.password}</Text>
          <TextInput
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
          <Text>{errors.confirmPassword}</Text>
          <Button onPress={handleSubmit} title="Submit" />
        </React.Fragment>
      )}
    </Formik>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
