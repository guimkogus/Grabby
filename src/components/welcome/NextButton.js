import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

export default ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.btn}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    flex: 1,
  },
  btn: {
    backgroundColor: colors.primaryLight,
    width: "30%",
    height: "15%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "45%",
    marginRight: "10%",
  },
  title: {
    color: colors.white,
    fontSize: normalize(22),
  },
});
