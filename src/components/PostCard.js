import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import colors from "../config/colors";
import GrabbyButton from "./GrabbyButton";
import ProductInfo from "./ProductInfo";

export default ({ product }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={2}
        source={product.image}
        style={styles.image}
      >
        <View style={styles.showcase}>
          <View style={styles.header}>
            <ProductInfo info={product.title} />
            <GrabbyButton onPress={() => console.log("Grabby it!")} />
          </View>
          <View style={styles.priceContainer}>
            <ProductInfo style={styles.price} info={product.price} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  showcase: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
  },
  priceContainer: {
    position: "absolute",
    marginTop: "50%",
    marginLeft: "55%",
  },
  price: {
    color: colors.white,
  },
});
