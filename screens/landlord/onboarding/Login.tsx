import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import route from "../../../navigation/route";
import colors from "../../../utils/colors";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput mode="outlined" style={styles.input} label="Email" />
      <TextInput
        secureTextEntry
        mode="outlined"
        style={styles.input}
        label="Password"
        right={<TextInput.Icon name="eye" />}
      />
      <Button
        contentStyle={{ padding: 10 }}
        mode="contained"
        onPress={() => console.log("hi")}
        style={styles.btn}
      >
        Login
      </Button>
      <Button
        contentStyle={{ padding: 10 }}
        onPress={() => console.log("hi")}
        style={styles.btn}
      >
        Forgot Password?
      </Button>
      <Text style={styles.txt}>
        Don’t have an account yet?{" "}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(route.LANDLORD_SIGN_UP)}
        >
          <Text style={{ color: colors.primary }}>Sign Up</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    marginVertical: 10,
  },
  btn: {
    width: "100%",
    marginVertical: 10,
  },
  txt: {
    textAlign: "center",
    fontSize: 15,
  },
});
export default Login;
