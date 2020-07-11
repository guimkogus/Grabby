import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

export default ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      color="#55c9ac"
      onPress={handleSubmit}
      title={title}
      fontWeight="bold"
      alignItems="center"
      marginVertical={20}
      height={60}
      fontSize={20}
    />
  );
};
