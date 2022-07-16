import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen1 from "../../screens/landlord/onboarding/SplashScreen1";
import route from "../route";
import SplashScreen2 from "../../screens/landlord/onboarding/SplashScreen2";
import SplashScreen3 from "../../screens/landlord/onboarding/SplashScreen3";
import Login from "../../screens/landlord/onboarding/Login";
import SignUp from "../../screens/landlord/onboarding/SignUp";
import Verification from "../../screens/landlord/onboarding/Verification";

const Stack = createNativeStackNavigator();

const LandlordNavigation = () => (
  <Stack.Navigator initialRouteName={route.LANDLORD_SPLASH_1}>
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={route.LANDLORD_SPLASH_1}
      component={SplashScreen1}
    />
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={route.LANDLORD_SPLASH_2}
      component={SplashScreen2}
    />
    <Stack.Screen
      options={{ headerShown: false, animation: "slide_from_right" }}
      name={route.LANDLORD_SPLASH_3}
      component={SplashScreen3}
    />
    <Stack.Screen
      options={{
        title: "Login",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={route.LANDLORD_LOGIN}
      component={Login}
    />
    <Stack.Screen
      options={{
        title: "Sign Up",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={route.LANDLORD_SIGN_UP}
      component={SignUp}
    />
    <Stack.Screen
      options={{
        title: "Verification",
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
      name={route.LANDLORD_VERIFICATION}
      component={Verification}
    />
  </Stack.Navigator>
);

export default LandlordNavigation;
