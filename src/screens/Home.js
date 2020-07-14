import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Modal from "react-native-modal";

import SearchBar from "../components/home/SearchBar";
import ShoppingIcon from "../components/home/ShoppingIcon";
import HomeHeader from "../components/home/HomeHeader";
import PostCard from "../components/home/PostCard";
import MenuBar from "../components/menu/MenuBar";

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
  const [menuTapped, setMenu] = useState(false);

  return (
    <View>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => setMenu(false)}
        isVisible={menuTapped}
        style={{ margin: 0 }}
      >
        <MenuBar />
      </Modal>
      <HomeHeader setMenu={() => setMenu(true)}>
        <SearchBar />
      </HomeHeader>
      <FlatList
        scrollEnabled
        data={db}
        renderItem={({ item }) => <PostCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <ShoppingIcon />
    </View>
  );
};

const styles = StyleSheet.create({});
