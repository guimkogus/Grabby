import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default () => {
  return (
    <>
      <View style={styles.shop}>
        <MaterialCommunityIcons
          style={styles.shopIcon}
          name="shopping"
          size={80}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  shop: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  shopIcon: {
    color: colors.white,
    marginBottom: 5,
  },
});
