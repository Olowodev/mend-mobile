import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import Button from "../../../components/Button";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { fontWeight: "800" }]}>
        Property Information
      </Text>
      <Text style={styles.txt}>
        Managing your property with us start with providing the property
        information in order for us to serve you better
      </Text>
      <View>
        <TextInput mode="outlined" label="Name of property" />
        <HelperText type="error" visible={false}>
          hi
        </HelperText>
        <TextInput mode="outlined" label="Address" />
        <HelperText type="error" visible={false}>
          hi
        </HelperText>
        <TextInput mode="outlined" label="Property Type" />
        <HelperText type="error" visible={false}>
          hi
        </HelperText>
        <TextInput mode="outlined" label="Number of Apartment" />
        <HelperText type="error" visible={false}>
          hi
        </HelperText>
        <Button>Continue</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  txt: {
    textAlign: "center",
  },
});
export default SecondScreen;
