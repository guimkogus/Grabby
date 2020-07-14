import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../config/colors";
import MenuOptions from "./MenuOptions";
import MenuHeader from "./MenuHeader";

export default ({ setMenu }) => {
  return (
    <View style={styles.menu}>
      <View style={styles.header}>
        <MenuHeader onPress={() => console.log("Sign In")} />
      </View>
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
  menu: {
    backgroundColor: "dodgerblue",
    height: "100%",
    width: "65%",
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "30%",
    flexDirection: "column-reverse",
  },
  optionsContainer: {
    backgroundColor: colors.light,
    flex: 1,
  },
});
