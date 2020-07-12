import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";

export default () => {
  return (
    <>
      <View style={styles.header}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="arrow-left"
          size={20}
        />
        <AppText style={styles.headerTitle}>ABOUT THE APP</AppText>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <AppText style={styles.text}>
              An international sales network for everyone made by a person who
              works with a single goal: to help you buy what is best for you,
              anywhere in the world. Check the terms of use and privacy policy
              below:
            </AppText>
            <AppText style={styles.title}>TERMS OF USE</AppText>
            <AppText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sollicitudin elementum neque ut ullamcorper. Fusce malesuada felis
              odio, nec feugiat metus interdum ac. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent porta accumsan felis.
              Curabitur bibendum nulla vitae metus dictum bibendum. Aenean
              elementum orci tortor, at lacinia elit tempus sit amet. Nunc in
              nunc vel erat ullamcorper tempor in sit amet erat. Suspendisse sed
              lorem dui. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam tempus ex eget eros sollicitudin accumsan
              fringilla et nisi. Aliquam interdum sem lectus, eget aliquam dolor
              aliquet non. Pellentesque egestas venenatis condimentum. Mauris ut
              nibh vitae sem posuere porttitor. Integer lacus diam, lobortis
              vitae augue quis, pretium vehicula mi. Vivamus et sapien et mauris
              cursus feugiat.
            </AppText>
            <AppText style={styles.title}>PRIVACY POLICY</AppText>
            <AppText style={styles.text}>
              Pellentesque fermentum mauris ut tellus interdum, a egestas ante
              venenatis. Phasellus consequat, velit et iaculis pellentesque,
              ligula nisl vestibulum dui, sit amet porttitor metus erat quis
              diam. Pellentesque eu urna at nisl mollis interdum eget id metus.
              Maecenas a nibh congue libero sagittis gravida in eu ipsum. Morbi
              et rutrum ligula, vel suscipit libero. Phasellus vulputate massa
              lacus, quis fermentum erat faucibus a. Praesent sit amet pretium
              felis. Duis fermentum, elit in pharetra malesuada, massa metus
              bibendum urna, sit amet aliquam tellus metus id lorem. Vestibulum
              nec magna nulla. Pellentesque sed dui maximus, malesuada metus
              vel, ultricies eros.
            </AppText>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    color: "#fff",
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#4C64CF",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 20,
  },
  statusBar: {
    height: 24,
    backgroundColor: "#5649E6",
  },
  text: {
    color: "#888",
    fontSize: 15,
  },
  textContainer: {
    marginTop: 10,
    width: "93%",
  },
  title: {
    marginVertical: 12,
    color: "#666",
    fontWeight: "bold",
    fontSize: 15,
  },
});
