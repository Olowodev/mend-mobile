import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import LandlordNavigation from "./navigation/LandlordNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <LandlordNavigation />
    </NavigationContainer>
  );
}
