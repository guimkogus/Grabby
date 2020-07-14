import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import MenuOptions from "./MenuOptions";
import normalize from "react-native-normalize";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.optionsContainer}>
        <MenuOptions
          onPress={() => console.log("Notifications")}
          icon={"notifications"}
          option={"Notifications"}
        />
        <MenuOptions
          onPress={() => console.log("Trips")}
          icon={"flight"}
          option={"Trips"}
        />
        <MenuOptions
          onPress={() => console.log("Orders")}
          icon={"shopping-cart"}
          option={"Orders"}
        />
        <MenuOptions
          onPress={() => console.log("Settings")}
          icon={"settings"}
          option={"Settings"}
        />
        <MenuOptions
          onPress={() => console.log("About")}
          icon={"info"}
          option={"About"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    height: "100%",
    width: "65%",
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "30%",
  },
  optionsContainer: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
