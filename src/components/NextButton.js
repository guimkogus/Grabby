import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default ({ title, onPress }) => {
  return (
    <View style={styles.btn}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: 100,
    marginTop: 220,
    marginLeft: 280,
  },
});
