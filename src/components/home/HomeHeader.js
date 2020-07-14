import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

export default ({ children, setMenu }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={setMenu}>
          <MaterialCommunityIcons
            style={styles.menu}
            name="menu"
            size={normalize(40)}
          />
        </TouchableWithoutFeedback>
        <Image
          style={styles.logo}
          source={require("../../assets/Grabby.png")}
        />
      </View>
      <View style={styles.welcome}>
        <AppText style={styles.welcomeText}>Hello,</AppText>
        <AppText style={[styles.welcomeText, { fontWeight: "bold" }]}>
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
    height: normalize(280),
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: normalize(20),
  },
  menu: {
    color: colors.white,
    position: "absolute",
    paddingRight: normalize(320),
  },
  logo: {
    width: normalize(150),
    height: normalize(40),
  },
  welcome: {
    padding: normalize(20),
    paddingTop: normalize(10),
    paddingBottom: normalize(25),
  },
  welcomeText: {
    color: colors.white,
    fontSize: normalize(30),
  },
});
