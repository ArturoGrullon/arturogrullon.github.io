import Cookies from "js-cookie";
import { getUserSteps } from "./utils/getUserSteps";
import "driver.js/dist/driver.css";

export const userGuide = () => {
  const userSteps = getUserSteps;
  const response = Cookies.get("userGuide");

  //If user has already seen the guide, skip
  if (response) return;

  userSteps.drive();
  Cookies.set("userGuide", "true");
};
