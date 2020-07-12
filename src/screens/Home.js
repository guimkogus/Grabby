import React from "react";
import { StyleSheet, View } from "react-native";

import SearchBar from "../components/SearchBar";
import ShoppingIcon from "../components/ShoppingIcon";
import HomeHeader from "../components/HomeHeader";

export default () => {
  return (
    <View>
      <HomeHeader>
        <SearchBar />
      </HomeHeader>
      <ShoppingIcon />
    </View>
  );
};

const styles = StyleSheet.create({});
