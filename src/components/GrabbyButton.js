import React from "react";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

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
    marginRight: 10,
    flexDirection: "row",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  title: {
    color: colors.white,
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 22,
  },
});
