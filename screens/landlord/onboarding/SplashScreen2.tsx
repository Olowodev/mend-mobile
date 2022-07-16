import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import route from "../../../navigation/route";
import colors from "../../../utils/colors";

const SplashScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.midContainer}>
        <Text style={styles.headline}>Accounting Tool made for you</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/splahes/1.png")}
        />
        <Text style={styles.text}>
          Store, sort, retrieve, and summarize your financial data.
        </Text>
      </View>
      <Button
        contentStyle={{ padding: 10 }}
        onPress={() => navigation.navigate(route.LANDLORD_SPLASH_3)}
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
    textAlign: "center",
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
export default SplashScreen2;
