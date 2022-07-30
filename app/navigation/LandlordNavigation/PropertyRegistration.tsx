import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen1 from "../../screens/landlord/onboarding/SplashScreen1";
import routes from "../../routes";
import FirstScreen from "../../screens/landlord/propertyRegistration/FirstScreen";
import SecondScreen from "../../screens/landlord/propertyRegistration/SecondScreen";

const Stack = createNativeStackNavigator();

const PropertyRegistration = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        title: "Register a property - 1",
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_PROPERTYREG1}
      component={FirstScreen}
    />
    <Stack.Screen
      options={{
        title: "Register a property - 2",
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_PROPERTYREG2}
      component={SecondScreen}
    />
  </Stack.Navigator>
);

export default PropertyRegistration;
