import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Button, Text, TextInput as TextField } from "react-native-paper";
import Codeverifier from "../../../components/reusables/codeverifier";
import route from "../../../navigation/route";
import colors from "../../../utils/colors";

const Verification = ({ navigation }) => {
  const [code, setCode] = React.useState<Array<string>>(["", "", "", ""]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Enter your Verification Code</Text>
      </View>
      {/* <View style={styles.cellContainer}>
        <View style={styles.cell}>
          <TextInput />
        </View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <TextInput secureTextEntry style={styles.input} />
      </View> */}
      <Codeverifier />
      <Button
        contentStyle={{ padding: 10 }}
        mode="contained"
        onPress={() => console.log("hi")}
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
    textAlign: "center",
    fontSize: 30,
  },
});
export default Verification;
