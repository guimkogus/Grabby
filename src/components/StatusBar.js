import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
    backgroundColor: "#5649E6",
  },
});
