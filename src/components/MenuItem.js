import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import normalize from "react-native-normalize";
import colors from "../config/colors";

export default ({ icon, option }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} style={styles.icon} size={normalize(30)} />
      <AppText>{option}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: colors.medium,
    margin: normalize(15),
  },
});
