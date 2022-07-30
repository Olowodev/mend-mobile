import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  // TextInput,
} from "react-native";
import { Text, TextInput as TextField } from "react-native-paper";
import Button from "../../../components/Button";
// import Codeverifier from "../../../components/reusables/codeverifier";
import routes from "../../../routes";
import colors from "../../../utils/colors";

const Verification = ({ navigation }) => {
  const [code, setCode] = React.useState<Array<string>>(["", "", "", ""]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Enter your Verification Code</Text>
      </View>

      <TextField
        mode="outlined"
        secureTextEntry
        keyboardType="number-pad"
        maxLength={6}
      />
      <Text style={{ fontSize: 16 }}>
        We sent verification code to your email 0812*******34 You can check your
        inbox.
      </Text>
      <Text style={{ margin: 20, textAlign: "center" }}>
        I didn’t received the code? Send again
      </Text>
      <Button
        onPress={() => navigation.navigate(routes.LANDLORD_SETUPPIN)}
        style={styles.btn}
      >
        Verify
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
  cellContainer: {
    position: "relative",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    letterSpacing: 50,
    paddingHorizontal: 10,
    fontSize: 50,
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 1,
    width: "100%",
  },
  cell: {
    borderWidth: 2,
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  btn: {
    width: "100%",
    marginVertical: 10,
  },
  txt: {
    // textAlign: "center",
    fontSize: 30,
  },
});
export default Verification;
