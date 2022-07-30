import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput } from "react-native-paper";
import Button from "../../../components/Button";
import routes from "../../../routes";
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
      <Button onPress={() => console.log("hi")} style={styles.btn}>
        Login
      </Button>
      <Button mode="text" onPress={() => console.log("hi")} style={styles.btn}>
        Forgot Password?
      </Button>
      <Text style={styles.txt}>
        Don’t have an account yet?{" "}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.LANDLORD_SIGN_UP)}
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
