import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import normalize from "react-native-normalize";

import colors from "../../config/colors";

export default () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.search}
          name="search-web"
          size={normalize(40)}
          color={colors.medium}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.gray}
          placeholder="Search for products, brands..."
          style={styles.input}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
    height: "20%",
    backgroundColor: colors.light,
    borderRadius: 100,
    alignItems: "center",
    marginTop: normalize(10),
  },
  input: {
    fontSize: normalize(17),
    flex: 1,
  },
  search: {
    marginLeft: normalize(15),
    marginRight: normalize(10),
  },
  text: {
    color: colors.medium,
  },
});
