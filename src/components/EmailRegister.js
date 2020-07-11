import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

export default ({ closeModal }) => {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "100%",
      }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row-reverse" }}>
          <MaterialCommunityIcons
            onPress={closeModal}
            name="close"
            size={22}
            style={styles.close}
          />
        </View>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <Text style={styles.text}>How should we</Text>
              <Text style={styles.text}>call you?</Text>
              <AppTextInput
                icon="account"
                onChangeText={handleChange("name")}
                placeholder="Name"
                marginTop={20}
              />
              <View style={styles.separator} />
              <AppTextInput
                icon="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppTextInput
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <View style={{ alignItems: "center" }}>
                <AppButton
                  color="#55c9ac"
                  onPress={handleSubmit}
                  title="Ok, agreed!"
                  fontWeight="bold"
                  alignItems="center"
                  marginTop={20}
                  height={60}
                  fontSize={20}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 510,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  close: {
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  separator: {
    height: 1,
    width: 300,
    backgroundColor: "#eee",
    alignSelf: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    color: "#999",
    fontWeight: "bold",
  },
});
