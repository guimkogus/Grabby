import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import colors from "../../config/colors";

export default ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={normalize(20)}
          color={colors.dark}
          style={styles.icon}
        />
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={colors.medium}
        style={styles.text}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: normalize(15),
    marginVertical: normalize(10),
    alignItems: "center",
    width: "80%",
    height: "12%",
  },
  icon: {
    marginLeft: normalize(15),
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    paddingLeft: normalize(15),
    fontSize: normalize(16),
  },
});
