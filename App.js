import { StatusBar } from "expo-status-bar";
import React from "react";
import BuyerWelcome from "./src/screens/welcome/BuyerWelcome";
import TravelerWelcome from "./src/screens/welcome/TravelerWelcome";
import LoginWelcome from "./src/screens/welcome/LoginWelcome";
import TermsOfUse from "./src/screens/welcome/TermsOfUse";
import ComponentTesting from "./src/screens/ComponentTesting";

export default function App() {
  return (
    <>
      <LoginWelcome />
      <StatusBar style="auto" />
    </>
  );
}
