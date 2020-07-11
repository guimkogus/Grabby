import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({
  color,
  icon,
  title,
  image,
  onPress,
  fontWeight,
  alignItems,
  marginTop,
  fontSize = 16,
  height = 50,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.btn,
          color === "#fff" ? styles.border : null,
          { backgroundColor: color, marginTop, height },
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={30}
            color="#fff"
          />
        )}
        {image && <Image style={styles.image} source={image} />}
        {icon && <View style={styles.separator} />}
        {image && <View style={styles.separator} />}
        <View style={{ width: "100%", alignItems }}>
          <Text
            style={[
              styles.title,
              color === "#fff" ? { color: "#000" } : { color: "#fff" },
              { fontWeight, fontSize },
            ]}
          >
            {title}
          </Text>
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
    margin: 10,
  },
  border: {
    borderColor: "#bbb",
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    padding: 20,
  },
  image: {
    width: 30,
    height: 30,
    position: "absolute",
    marginLeft: 20,
  },
  separator: {
    height: "100%",
    width: 1,
    backgroundColor: "#bbb",
    marginLeft: 70,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
});
