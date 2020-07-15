import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import AppHeader from "../../components/utils/AppHeader";
import AppText from "../../components/utils/AppText";
import MenuOptions from "../../components/menu/MenuOptions";

export default () => {
  return (
    <View>
      <AppHeader
        title="Settings"
        onPress={() => console.log("Back Settings")}
      />
      <View style={styles.options}>
        <MenuOptions
          option="Account"
          icon="account-box"
          onPress={() => console.log("Account")}
        />
        <MenuOptions
          option="Payment and Payout"
          icon="payment"
          onPress={() => console.log("Payment and Payout")}
        />
        <MenuOptions
          option="Orders History"
          icon="history"
          onPress={() => console.log("Orders History")}
        />
        <MenuOptions
          option="Notifications"
          icon="notifications"
          onPress={() => console.log("Notifications")}
        />
        <MenuOptions
          option="Log Out"
          icon="exit-to-app"
          onPress={() => console.log("Log Out")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  options: {},
});
