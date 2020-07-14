import React from "react";
import { StyleSheet, View, Image } from "react-native";
import normalize from "react-native-normalize";

import AppText from "../utils/AppText";
import colors from "../../config/colors";

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
    backgroundColor: colors.primary,
    width: "100%",
    height: "35%",
    alignItems: "center",
  },
  descriptionContainer: {
    marginHorizontal: 30,
    marginTop: 80,
    alignItems: "center",
  },
  descriptionTitle: {
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
  },
  icon: {
    width: "80%",
    height: "80%",
    marginBottom: 5,
  },
  iconBackground: {
    backgroundColor: colors.white,
    width: normalize(130),
    height: normalize(130),
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: normalize(160),
  },
  title: {
    marginTop: normalize(25),
    alignItems: "center",
  },
  texts: {
    fontSize: normalize(30),
    fontWeight: "bold",
    color: colors.white,
  },
});
