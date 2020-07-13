import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";
import normalize from "react-native-normalize";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(10).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default ({ closeModal }) => {
  return (
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row-reverse" }}>
          <MaterialCommunityIcons
            onPress={closeModal}
            name="close"
            size={normalize(22)}
            style={styles.close}
          />
        </View>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Text style={styles.text}>How should we</Text>
          <Text style={styles.text}>call you?</Text>
          <AppFormField name="name" icon="account" placeholder="Name" />
          <View style={styles.separator} />
          <AppFormField
            name="email"
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <View style={styles.submit}>
            <SubmitButton title="Ok, agreed!" />
          </View>
        </AppForm>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(5),
    width: "95%",
    height: normalize(500),
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  close: {
    marginRight: normalize(20),
    marginTop: normalize(20),
  },
  separator: {
    height: 1,
    width: normalize(300),
    backgroundColor: colors.light,
    alignSelf: "center",
    marginVertical: normalize(5),
  },
  submit: {
    alignItems: "center",
    flexDirection: "column-reverse",
    flex: 1,
  },
  text: {
    fontSize: normalize(22),
    textAlign: "center",
    color: colors.medium,
    fontWeight: "bold",
  },
});
