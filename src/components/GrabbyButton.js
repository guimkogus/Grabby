import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

export default ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <AppText style={styles.title}>Grabby it!</AppText>
        <Entypo name="aircraft-take-off" style={styles.icon} size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
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
  },
  icon: {
    color: colors.white,
    paddingRight: 10,
  },
});
