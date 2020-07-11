import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({
  icon,
  width = "80%",
  alignSelf,
  marginTop,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { width, marginTop }]}>
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
        style={[styles.text, { flex: 1 }]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#eee",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
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
