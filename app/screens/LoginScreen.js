import React from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginScreen = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required().label("Email"),
    password: Yup.string().required().label("Password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={LoginSchema}
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
          <Button onPress={handleSubmit} title="Submit" />
        </React.Fragment>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
