import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ color, icon, title, image }) => {
  return (
    <TouchableNativeFeedback>
      <View
        style={[
          color !== "#fff" ? styles.btn : styles.btn2,
          { backgroundColor: color },
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
        <View style={styles.separator} />
        <Text
          style={[
            styles.title,
            color === "#fff" ? { color: "#000" } : { color: "#fff" },
          ]}
        >
          {title}
        </Text>
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
    borderRadius: 10,
    margin: 10,
  },
  btn2: {
    width: "75%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
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
    paddingLeft: 20,
  },
});
