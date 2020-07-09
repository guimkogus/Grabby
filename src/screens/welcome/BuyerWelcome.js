import React from "react";
import Welcome from "../../components/Welcome";

export default () => {
  return (
    <Welcome
      descriptionTitle="Buy anything. Wherever you want."
      description="As a Grabby buyer, you can ask travelers to bring your purchases from other countries."
      image={require("../../assets/Grabby-Logo.png")}
      titleText1="Order it!"
      titleText2="Save it!"
      titleText3="Grabby it!"
    />
  );
};
