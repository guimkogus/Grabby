import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";

import colors from "../config/colors";

export default ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.shop}>
        <MaterialCommunityIcons style={styles.shopIcon} name="cart" size={50} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  shop: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: colors.primaryShadow,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 560,
    marginLeft: 320,
  },
  shopIcon: {
    color: colors.white,
  },
});
