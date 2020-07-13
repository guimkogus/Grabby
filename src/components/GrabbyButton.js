import React from "react";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import normalize from "react-native-normalize";

export default ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <AppText style={styles.title}>Grabby it!</AppText>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: normalize(10),
    flexDirection: "row",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: normalize(55),
  },
  title: {
    color: colors.white,
    marginHorizontal: normalize(10),
    fontWeight: "bold",
    fontSize: normalize(22),
  },
});
