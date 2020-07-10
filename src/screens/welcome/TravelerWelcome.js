import React from "react";
import { StyleSheet, View } from "react-native";
import Welcome from "../../components/Welcome";
import NextButton from "../../components/NextButton";

export default () => {
  return (
    <View style={styles.container}>
      <Welcome
        descriptionTitle="Travel anywhere, save on your trips."
        description="As a Grabby traveler, you're asked to bring orders and earn money with it."
        image={require("../../assets/TravelerIcon.png")}
        titleText1="Travel!"
        titleText2="Bring in!"
        titleText3="Earn with it!"
      />
      <NextButton title="next" onPress={() => console.log("Next")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
