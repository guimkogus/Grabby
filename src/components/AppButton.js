import React from "react";
import { StyleSheet, View, TouchableNativeFeedback, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import normalize from "react-native-normalize";

export default ({
  buttonStyle,
  textStyle,
  color,
  icon,
  title,
  image,
  onPress,
  alignItems,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.btn,
          buttonStyle,
          color === colors.white ? styles.border : null,
          { backgroundColor: color },
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={normalize(30)}
            color={colors.white}
          />
        )}
        {image && <Image style={styles.image} source={image} />}
        {icon && <View style={styles.separator} />}
        {image && <View style={styles.separator} />}
        <View style={{ width: "100%", alignItems }}>
          <AppText
            style={[
              styles.title,
              textStyle,
              color === colors.white
                ? { color: colors.black }
                : { color: colors.white },
            ]}
          >
            {title}
          </AppText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: normalize(10),
  },
  border: {
    borderColor: colors.medium,
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    padding: normalize(20),
  },
  image: {
    width: normalize(30),
    height: normalize(30),
    position: "absolute",
    marginLeft: normalize(20),
  },
  separator: {
    height: "100%",
    width: 1,
    backgroundColor: colors.medium,
    marginLeft: normalize(70),
  },
  title: {
    paddingHorizontal: normalize(20),
  },
});
