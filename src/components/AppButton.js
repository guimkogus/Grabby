import React from "react";
import { StyleSheet, View, TouchableNativeFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ color, icon, title }) => {
  return (
    <TouchableNativeFeedback>
      <View style={[styles.btn, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={30}
          color="#fff"
        />
        <View style={styles.separator} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "75%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  icon: {
    position: "absolute",
    padding: 20,
  },
  separator: {
    height: "100%",
    width: 1,
    backgroundColor: "#fff",
    marginLeft: 70,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
  },
});
