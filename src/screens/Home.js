import React from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ShoppingIcon from "../components/ShoppingIcon";
import HomeHeader from "../components/HomeHeader";
import PostCard from "../components/PostCard";

const db = [
  {
    id: 1,
    title: "iPhone 11 Pro Max",
    price: "R$ 8.235,49",
    link: "https://www.amazon.com.br/Apple-iPhone-Pro-Max-256Gb/dp/B07Y5MDRGB",
    country: "Brazil",
    image: require("../assets/iphone11.jpg"),
    details: {
      color: {
        primary: "Verde Meia Noite",
        secondary: "Cinza Espacial",
      },
      storage: "256gb",
    },
  },
  {
    id: 2,
    title: "Galaxy S20 5G",
    price: "US$ 849.99",
    link:
      "https://www.amazon.com/Samsung-Unlocked-Fingerprint-Recognition-Long-Lasting/dp/B082XXKZRC",
    country: "USA",
    image: require("../assets/galaxyS20.jpg"),
    details: {
      color: {
        primary: "Cloud Blue",
        secondary: null,
      },
      storage: "128gb",
    },
  },
];

export default () => {
  return (
    <View>
      <HomeHeader>
        <SearchBar />
      </HomeHeader>
      <ScrollView>
        <FlatList
          scrollEnabled
          data={db}
          renderItem={({ item }) => <PostCard product={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
      <ShoppingIcon />
    </View>
  );
};

const styles = StyleSheet.create({});
