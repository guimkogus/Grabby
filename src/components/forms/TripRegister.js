import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import normalize from "react-native-normalize";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppButton from "../utils/AppButton";
import colors from "../../config/colors";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  from: Yup.string().required().min(3).label("From"),
  to: Yup.string().required().label("To"),
  arrivalDate: Yup.date().required().label("Arrival date"),
  departureDate: Yup.date().required().label("Departure date"),
});

export default () => {
  return (
    <AppForm
      initialValues={{ from: "", to: "", arrivalDate: "", departureDate: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField name="from" icon="location-on" placeholder="From" />
      <AppFormField name="to" icon="my-location" placeholder="To" />
      <View style={styles.dateContainer}>
        <AppFormField
          name="arrivalDate"
          icon="date-range"
          placeholder="Arrival date"
          style={styles.date}
        />
        <AppFormField
          name="departureDate"
          placeholder="Departure date"
          style={styles.date}
        />
      </View>
      <SubmitButton title="Travel!" />
    </AppForm>
  );
};

const styles = StyleSheet.create({
  date: {
    width: normalize(160),
    marginHorizontal: normalize(6),
  },
  dateContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
