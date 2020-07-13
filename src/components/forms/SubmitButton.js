import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import colors from "../../config/colors";
import normalize from "react-native-normalize";

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
