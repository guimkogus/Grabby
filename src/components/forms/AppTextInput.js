import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"#666"}
          style={styles.icon}
        />
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={"#999"}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#eee",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
  },
  icon: {
    marginLeft: 15,
  },
  text: {
    fontWeight: "bold",
    paddingLeft: 15,
    fontSize: 16,
  },
});
