import { StatusBar } from "react-native";
import React from "react";
import BuyerWelcome from "./src/screens/welcome/BuyerWelcome";
import TravelerWelcome from "./src/screens/welcome/TravelerWelcome";
import LoginWelcome from "./src/screens/welcome/LoginWelcome";
import TermsOfUse from "./src/screens/welcome/TermsOfUse";
import ComponentTesting from "./src/screens/ComponentTesting";
import Home from "./src/screens/Home";
import Messages from "./src/screens/menu/Messages";

export default function App() {
  return (
    <>
      <StatusBar style={"auto"} />
      <Messages />
    </>
  );
}
