import { Platform } from "react-native";
import normalize from "react-native-normalize";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: normalize(18),
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
