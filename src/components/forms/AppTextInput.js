import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import colors from "../../config/colors";

export default ({ icon, placeholder, size = normalize(20), style }) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={size}
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
    width: normalize(330),
    height: normalize(60),
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
