import React from "react";
import { StyleSheet, View, TouchableNativeFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ color, icon, title }) => {
  return (
    <TouchableNativeFeedback>
      <View style={[styles.btn, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={icon} size={30} color="#fff" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "75%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
});
