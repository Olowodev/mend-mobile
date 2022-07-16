import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

type CodeverifierType = {
  length?: number;
};

const Codeverifier = ({ length = 6 }: CodeverifierType) => {
  const CodeRefs = React.useRef([]);
  return (
    // <View style={styles.container}>
    <TextInput style={{ fontSize: 50 }} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 3,
    backgroundColor: "red",
  },
  inp: {
    borderWidth: 2,
    padding: 20,
    width: "100%",
    height: 70,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 10,
  },
});
export default Codeverifier;
