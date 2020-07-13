import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default ({
  descriptionTitle,
  description,
  image,
  titleText1,
  titleText2,
  titleText3,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          {titleText1 && <AppText style={styles.texts}>{titleText1}</AppText>}
          {titleText2 && <AppText style={styles.texts}>{titleText2}</AppText>}
          {titleText3 && <AppText style={styles.texts}>{titleText3}</AppText>}
        </View>
        <View style={styles.iconBackground}>
          <Image style={styles.icon} source={image} />
        </View>
      </View>
      {descriptionTitle && description && (
        <View style={styles.descriptionContainer}>
          <AppText style={styles.descriptionTitle}>{descriptionTitle}</AppText>
          <AppText style={styles.description}>{description}</AppText>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryShadow,
    width: "100%",
    height: 225,
    alignItems: "center",
  },
  descriptionContainer: {
    marginHorizontal: 30,
    marginTop: 80,
    alignItems: "center",
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  iconBackground: {
    backgroundColor: colors.white,
    width: 130,
    height: 130,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 160,
  },
  title: {
    marginTop: 25,
    alignItems: "center",
  },
  texts: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
});
