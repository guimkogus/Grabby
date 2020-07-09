import React from "react";
import Welcome from "../../components/Welcome";

export default () => {
  return (
    <Welcome
      descriptionTitle="Travel anywhere, save on your trips."
      description="As a Grabby traveler, you're asked to bring orders and earn money with it."
      image={require("../../assets/TravelerIcon.png")}
      titleText1="Travel!"
      titleText2="Bring in!"
      titleText3="Earn with it!"
    />
  );
};
