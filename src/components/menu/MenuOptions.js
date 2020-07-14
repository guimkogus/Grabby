import React from "react";
import { TouchableHighlight } from "react-native";
import MenuItem from "./MenuItem";

export default ({ onPress, icon, option }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <MenuItem icon={icon} option={option} />
    </TouchableHighlight>
  );
};
