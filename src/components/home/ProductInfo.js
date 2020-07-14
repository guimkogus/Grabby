import React from "react";
import { StyleSheet, View } from "react-native";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

export default ({ info, ...otherProps }) => {
  return (
    <View style={styles.container} {...otherProps}>
      <AppText style={styles.text}>{info}</AppText>
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
    margin: normalize(10),
    color: colors.white,
    fontSize: normalize(24),
    fontWeight: "bold",
    textAlign: "center",
  },
});
