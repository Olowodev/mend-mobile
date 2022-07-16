import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";
import route from "../../../navigation/route";
import colors from "../../../utils/colors";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Already have an account?{" "}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(route.LANDLORD_LOGIN)}
        >
          <Text style={{ color: colors.primary }}>Login</Text>
        </TouchableWithoutFeedback>
      </Text>
      <TextInput mode="outlined" style={styles.input} label="Name" />
      <TextInput mode="outlined" style={styles.input} label="Email" />
      <TextInput
        secureTextEntry
        mode="outlined"
        style={styles.input}
        label="Password"
        right={<TextInput.Icon name="eye" />}
      />
      <TextInput
        secureTextEntry
        mode="outlined"
        style={styles.input}
        label="Confirm Password"
        right={<TextInput.Icon name="eye" />}
      />
      <View style={styles.termsView}>
        <Checkbox color={colors.primary} status="checked" />
        <Text style={{ width: "90%" }}>
          By signing up, you agree to the{" "}
          <TouchableWithoutFeedback
          //   onPress={() => navigation.navigate(route.LANDLORD_LOGIN)}
          >
            <Text style={{ color: colors.primary }}>
              Terms of Service and Privacy Policy
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>

      <Button
        contentStyle={{ padding: 10 }}
        mode="contained"
        onPress={() => navigation.navigate(route.LANDLORD_VERIFICATION)}
        style={styles.btn}
      >
        Sign Up
      </Button>
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
  termsView: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    width: "100%",
    marginVertical: 10,
  },
  txt: {
    // textAlign: "center",
    fontSize: 15,
  },
});
export default SignUp;
