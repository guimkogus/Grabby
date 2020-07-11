import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import Welcome from "../../components/Welcome";
import AppButton from "../../components/AppButton";
import CheckTermOfUses from "../../components/CheckTermOfUses";
import EmailRegister from "../../components/EmailRegister";

export default () => {
  const [showEmailRegister, setShowEmailRegister] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <Modal
        transparent={true}
        style={{ alignSelf: "center" }}
        visible={showEmailRegister}
        animationType="slide"
      >
        <EmailRegister closeModal={() => setShowEmailRegister(false)} />
      </Modal>
      <Welcome
        titleText1="Now just log in"
        titleText2="and get started"
        titleText3=";)"
        image={require("../../assets/loginIcon.png")}
      />
      <View style={styles.container}>
        <CheckTermOfUses
          isSelected={isSelected}
          setSelection={setSelection}
          style={styles.terms}
          onPress={() => console.log("termos de uso")}
        />
        <View
          style={[
            { width: "100%", alignItems: "center" },
            isSelected ? null : { opacity: 0.5 },
          ]}
        >
          <AppButton
            color="#46B0DB"
            icon="email"
            title="Continue with E-mail"
            onPress={() => setShowEmailRegister(isSelected)}
          />
          <View style={styles.separator}>
            <View style={styles.trace} />
            <Text style={styles.or}>Or</Text>
            <View style={styles.trace} />
          </View>
          <AppButton
            color="#4C64CF"
            icon="facebook-box"
            title="Continue with Facebook"
          />
          <AppButton
            color="#fff"
            image={require("../../assets/G.svg.webp")}
            title="Continue with Google"
          />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => console.log("Log in later")}>
        <Text style={styles.skip}>Log in later</Text>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: "center",
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: "100%",
  },
  skip: {
    fontSize: 14,
    color: "#46B0DB",
    marginTop: 30,
    marginLeft: 30,
  },
  terms: {
    marginBottom: 10,
  },
  trace: {
    backgroundColor: "#bbb",
    height: 1,
    width: "30%",
    marginHorizontal: 10,
  },
  or: {
    color: "#777",
  },
});
