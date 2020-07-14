import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import MenuItem from "./MenuItem";

export default ({ onPress, icon, option }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MenuItem icon={icon} option={option} />
    </TouchableWithoutFeedback>
  );
};
