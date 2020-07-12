import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default ({ info, style, ...otherProps }) => {
  return (
    <View style={styles.container} {...otherProps}>
      <AppText style={[styles.text, style]}>{info}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    alignSelf: "center",
  },
  text: {
    margin: 10,
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
