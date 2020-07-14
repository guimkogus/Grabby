import React from "react";
import { StyleSheet, View } from "react-native";

import Welcome from "../../components/welcome/Welcome";
import NextButton from "../../components/welcome/NextButton";

export default () => {
  return (
    <View style={styles.container}>
      <Welcome
        descriptionTitle="Buy anything. Wherever you want."
        description="As a Grabby buyer, you can ask travelers to bring your purchases from other countries."
        image={require("../../assets/BuyerIcon.png")}
        titleText1="Order it!"
        titleText2="Save it!"
        titleText3="Grabby it!"
      />
      <NextButton title="Next" onPress={() => console.log("Next")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
