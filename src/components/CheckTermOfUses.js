import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  TouchableWithoutFeedback,
} from "react-native";

export default ({ onPress, style }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={[styles.checkboxContainer, style]}>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <View>
        <View style={styles.line}>
          <Text>By logging in, I agree to </Text>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.hyperlink}>terms of use</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.line}>
          <Text>and </Text>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.hyperlink}>privacy policy</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
  },
  hyperlink: {
    fontWeight: "bold",
    color: "#46B0DB",
  },
  line: {
    flexDirection: "row",
  },
});
