import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import normalize from "react-native-normalize";

import GrabbyButton from "./GrabbyButton";
import ProductInfo from "./ProductInfo";

export default ({ product }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={3}
        source={product.image}
        style={styles.image}
      >
        <View style={styles.showcase}>
          <View style={styles.header}>
            <GrabbyButton onPress={() => console.log("Grabby it!")} />
            <ProductInfo info={product.title} />
          </View>
          <View style={styles.priceContainer}>
            <ProductInfo info={product.price} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: normalize(250),
    width: "90%",
    marginTop: normalize(20),
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(5),
    marginLeft: normalize(5),
  },
  image: {
    width: "100%",
    height: normalize(250),
  },
  showcase: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 5,
  },
  priceContainer: {
    position: "absolute",
    marginTop: "50%",
    marginLeft: "3%",
  },
});
