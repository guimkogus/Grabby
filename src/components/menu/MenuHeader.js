import React from "react";
import { TouchableOpacity } from "react-native";
import MenuSignIn from "./MenuSignIn";

export default ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MenuSignIn />
    </TouchableOpacity>
  );
};
