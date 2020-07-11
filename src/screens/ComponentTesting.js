import React from "react";
import { StyleSheet, View } from "react-native";
import EmailRegister from "../components/forms/EmailRegister";

export default () => {
  return (
    <View style={styles.container}>
      <EmailRegister />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
