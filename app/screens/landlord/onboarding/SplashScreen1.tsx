import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import Button from "../../../components/Button";
import route from "../../../routes";
import colors from "../../../utils/colors";

const SplashScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.midContainer}>
        <Text style={styles.headline}>Flexible payment </Text>
        <Image
          style={styles.img}
          source={require("../../../assets/splahes/1.png")}
        />
        <Text style={styles.text}>
          keep records and track all your properties within one platform
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate(route.LANDLORD_SPLASH_2)}
        mode="contained"
        style={styles.btn}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  midContainer: {
    display: "flex",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  headline: {
    color: colors.primary,
    fontSize: 35,
    fontWeight: "700",
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,

    textAlign: "center",
  },
  btn: {
    width: "90%",
  },
});
export default SplashScreen1;
