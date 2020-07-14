import React from "react";
import { StyleSheet, View } from "react-native";
import MenuBar from "../components/MenuBar";

export default () => {
  return (
    <View style={styles.container}>
      <MenuBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
  },
});
