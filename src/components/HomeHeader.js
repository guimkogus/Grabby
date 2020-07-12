import React from "react";
import { StyleSheet, Image, View, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

export default ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons style={styles.menu} name="menu" size={40} />
        <Image style={styles.logo} source={require("../assets/Grabby.png")} />
      </View>
      <View style={styles.welcome}>
        <AppText style={styles.welcomeText}>Hello,</AppText>
        <AppText style={[styles.welcomeText, styles.welcomeName]}>
          Welcome!
        </AppText>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 300,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
  menu: {
    color: colors.white,
    position: "absolute",
    paddingRight: 340,
  },
  logo: {
    width: 150,
    height: 40,
  },
  welcome: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 25,
  },
  welcomeText: {
    color: colors.white,
    fontSize: 30,
  },
  welcomeName: {
    fontWeight: "bold",
  },
});
