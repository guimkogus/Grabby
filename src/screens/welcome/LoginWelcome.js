import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import normalize from "react-native-normalize";
import Modal from "react-native-modal";

import Welcome from "../../components/welcome/Welcome";
import AppButton from "../../components/utils/AppButton";
import CheckTermOfUses from "../../components/forms/CheckTermOfUses";
import EmailRegister from "../../components/forms/EmailRegister";
import colors from "../../config/colors";

export default () => {
  const [showEmailRegister, setShowEmailRegister] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <Modal
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        onBackdropPress={() => setShowEmailRegister(false)}
        isVisible={showEmailRegister}
        style={{ margin: 0, alignItems: "center" }}
      >
        <EmailRegister closeModal={() => setShowEmailRegister(false)} />
      </Modal>
      <Welcome
        titleText1="Now just log in"
        titleText2="and get started"
        titleText3=";)"
        image={require("../../assets/logo.png")}
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
            buttonStyle={styles.buttonStyle}
            color={colors.primaryLight}
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
            buttonStyle={styles.buttonStyle}
            color={colors.primaryMedium}
            icon="facebook-box"
            title="Continue with Facebook"
          />
          <AppButton
            buttonStyle={styles.buttonStyle}
            color={colors.white}
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
    marginTop: normalize(70),
    alignItems: "center",
  },
  buttonStyle: {
    height: normalize(50),
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: normalize(20),
    width: "100%",
  },
  skip: {
    fontSize: normalize(16),
    color: colors.primaryLight,
    marginTop: normalize(20),
    marginLeft: normalize(30),
  },
  trace: {
    backgroundColor: "#bbb",
    height: 1,
    width: "30%",
    marginHorizontal: normalize(10),
  },
  or: {
    color: "#777",
  },
});
