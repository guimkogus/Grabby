import React from "react";
import { StyleSheet, View } from "react-native";
import AppHeader from "../../components/utils/AppHeader";
import TripRegister from "../../components/forms/TripRegister";
import AppText from "../../components/utils/AppText";
import colors from "../../config/colors";
import normalize from "react-native-normalize";

export default () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Trips" onPress={() => console.log("Back Trips")} />
      <TripRegister />
      <View style={styles.separator} />
      <AppText style={styles.text}>
        Add your trip to make multiple offers and earn more money.
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: colors.medium,
    marginVertical: normalize(15),
  },
  text: {
    width: "80%",
    textAlign: "center",
  },
});
