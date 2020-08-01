import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import { TextInput } from "react-native";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <React.Fragment>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

export default AppFormField;
