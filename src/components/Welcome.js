import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
          {titleText1 && <Text style={styles.texts}>{titleText1}</Text>}
          {titleText2 && <Text style={styles.texts}>{titleText2}</Text>}
          {titleText3 && <Text style={styles.texts}>{titleText3}</Text>}
        </View>
        <View style={styles.iconBackground}>
          <Image style={styles.icon} source={image} />
        </View>
      </View>
      {descriptionTitle && description && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{descriptionTitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4C64CF",
    width: "100%",
    height: 250,
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
  },
  iconBackground: {
    backgroundColor: "#55c9ac",
    width: 130,
    height: 130,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 180,
  },
  title: {
    marginTop: 50,
    alignItems: "center",
  },
  texts: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
