import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

export default () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="sign-in" size={normalize(30)} style={styles.icon} />
      <AppText style={styles.title}>Sign-in</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: normalize(15),
  },
  icon: {
    color: colors.white,
    margin: normalize(15),
  },
  title: {
    color: colors.white,
    fontSize: normalize(26),
    fontWeight: "bold",
  },
});
