import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import AppText from "./AppText";
import colors from "../../config/colors";

export default ({ title, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={onPress}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="arrow-left"
          size={normalize(22)}
        />
      </TouchableWithoutFeedback>
      <AppText style={styles.headerTitle}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: normalize(10),
    color: colors.white,
  },
  header: {
    width: "100%",
    height: normalize(50),
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  headerTitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: normalize(16),
    marginLeft: normalize(25),
  },
});
