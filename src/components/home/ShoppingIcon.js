import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";

import colors from "../../config/colors";
import normalize from "react-native-normalize";

export default ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.shop}>
        <MaterialCommunityIcons
          style={styles.shopIcon}
          name="cart"
          size={normalize(50)}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  shop: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: normalize(500),
    marginLeft: normalize(285),
  },
  shopIcon: {
    color: colors.white,
  },
});
