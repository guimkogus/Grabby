import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import normalize from "react-native-normalize";

import AppButton from "../utils/AppButton";
import colors from "../../config/colors";

export default ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      buttonStyle={styles.btn}
      textStyle={styles.text}
      color={colors.secondary}
      alignItems={"center"}
      onPress={handleSubmit}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: normalize(20),
    height: normalize(60),
  },
  text: {
    fontWeight: "bold",
    fontSize: normalize(20),
  },
});
