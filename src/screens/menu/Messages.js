import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "../../components/utils/AppHeader";
import AppTextInput from "../../components/forms/AppTextInput";
import normalize from "react-native-normalize";
import AppText from "../../components/utils/AppText";
import colors from "../../config/colors";

export default () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Messages" />
      <AppTextInput
        icon="account-box"
        placeholder="Find user"
        size={normalize(30)}
        style={{ marginTop: normalize(30) }}
      />
      <View style={styles.separator} />
      <AppText style={styles.text}>
        Once you create an order or make a delivery offer, you can start a new
        conversation with another member
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
    width: "80%",
    height: 1,
    marginVertical: normalize(22),
    backgroundColor: colors.light,
  },
  text: {
    width: "90%",
    textAlign: "center",
  },
});
