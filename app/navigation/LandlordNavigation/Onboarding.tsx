import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen1 from "../../screens/landlord/onboarding/SplashScreen1";
import routes from "../../routes";
import SplashScreen2 from "../../screens/landlord/onboarding/SplashScreen2";
import SplashScreen3 from "../../screens/landlord/onboarding/SplashScreen3";
import Login from "../../screens/landlord/onboarding/Login";
import SignUp from "../../screens/landlord/onboarding/SignUp";
import Verification from "../../screens/landlord/onboarding/Verification";
import PinSetup from "../../screens/landlord/onboarding/PinSetup";
import PinSetup2 from "../../screens/landlord/onboarding/PinSetup2";
import PropertyRegistration from "./PropertyRegistration";

const Stack = createNativeStackNavigator();

const Onboarding = () => (
  <Stack.Navigator initialRouteName={routes.LANDLORD_SPLASH_1}>
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={routes.LANDLORD_SPLASH_1}
      component={SplashScreen1}
    />
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={routes.LANDLORD_SPLASH_2}
      component={SplashScreen2}
    />
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={routes.LANDLORD_SPLASH_3}
      component={SplashScreen3}
    />
    <Stack.Screen
      options={{
        title: "Login",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_LOGIN}
      component={Login}
    />
    <Stack.Screen
      options={{
        title: "Sign Up",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_SIGN_UP}
      component={SignUp}
    />
    <Stack.Screen
      options={{
        title: "Verification",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_VERIFICATION}
      component={Verification}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_SETUPPIN}
      component={PinSetup}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_SETUPPIN2}
      component={PinSetup2}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      name={routes.LANDLORD_PROPERTYREGISTRATION}
      component={PropertyRegistration}
    />
  </Stack.Navigator>
);

export default Onboarding;
