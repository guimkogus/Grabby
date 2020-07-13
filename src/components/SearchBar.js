import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

export default ({ style }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, style]}>
        <MaterialCommunityIcons
          style={styles.search}
          name="search-web"
          size={40}
          color={colors.medium}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={"#999"}
          placeholder="Search for products, brands..."
          style={styles.input}
        />
        <View style={styles.micContainer}>
          <View style={styles.separator} />
          <MaterialCommunityIcons
            style={styles.microphone}
            name="microphone-outline"
            size={35}
            color={colors.primaryShadow}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
    height: "20%",
    backgroundColor: colors.light,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    fontSize: 17,
    height: "100%",
  },
  search: {
    marginLeft: 15,
    marginRight: 10,
  },
  separator: {
    backgroundColor: colors.medium,
    height: "100%",
    width: 1,
    marginLeft: 25,
  },
  micContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  microphone: {
    marginRight: 15,
    marginLeft: 10,
  },
  text: {
    color: colors.medium,
  },
});
