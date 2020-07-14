import React from "react";
import {
  StyleSheet,
  View,
  CheckBox,
  TouchableWithoutFeedback,
} from "react-native";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

export default ({ onPress, isSelected, setSelection }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <View>
        <View style={styles.line}>
          <AppText>By logging in, I agree to </AppText>
          <TouchableWithoutFeedback onPress={onPress}>
            <AppText style={styles.hyperlink}>terms of use</AppText>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.line}>
          <AppText>and </AppText>
          <TouchableWithoutFeedback onPress={onPress}>
            <AppText style={styles.hyperlink}>privacy policy</AppText>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: normalize(10),
  },
  hyperlink: {
    fontWeight: "bold",
    color: colors.primaryLight,
  },
  line: {
    flexDirection: "row",
  },
});
