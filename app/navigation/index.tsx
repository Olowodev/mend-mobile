import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../routes";
import Onboarding from "./LandlordNavigation/Onboarding";
import PropertyRegistration from "./LandlordNavigation/PropertyRegistration";

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={routes.ONBOARDING}
      component={Onboarding}
    />
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={routes.LANDLORD_PROPERTYREGISTRATION}
      component={PropertyRegistration}
    />
  </Stack.Navigator>
);

export default Navigation;
