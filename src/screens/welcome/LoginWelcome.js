import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Welcome from "../../components/Welcome";
import AppButton from "../../components/AppButton";

export default () => {
  return (
    <>
      <Welcome
        titleText1="Now just log in"
        titleText2="and get started"
        titleText3=";)"
        image={require("../../assets/loginIcon.png")}
      />
      <View style={styles.container}>
        <AppButton color="#46B0DB" icon="email" title="Continue with E-mail" />
        <AppButton
          color="#4C64CF"
          icon="facebook-box"
          title="Continue with Facebook"
        />
        <AppButton color="#7B46DB" icon="google" title="Continue with Google" />
      </View>
      <TouchableWithoutFeedback onPress={() => console.log("log in later")}>
        <Text style={styles.skip}>Log in later</Text>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  skip: {
    fontSize: 14,
    color: "#46B0DB",
    marginTop: 30,
    marginLeft: 30,
  },
});
