import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useTheme } from "react-native-paper";
import RNScreenKeyboard from "../../../components/RNScreenKeyboard";
import colors from "../../../utils/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import PinEntry from "../../../components/PinEntry";
import routes from "../../../routes";

const { width, height } = Dimensions.get("window");

const PinSetup = ({ navigation }) => {
  const [value, setValue] = React.useState<string>("");

  const handlePin = (val: string) => {
    if (val.length > 4) return;
    setValue(val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Let’s setup your PIN</Text>
      <PinEntry length={value.length} />
      <RNScreenKeyboard
        value={value}
        onKeyPress={handlePin}
        textStyle={styles.keyPadText}
        cellStyle={{ margin: 20, marginHorizontal: 30 }}
        lastRowStyle={{ flexDirection: "row-reverse" }}
        decimalComponent={
          <MaterialCommunityIcons
            onPress={() => navigation.navigate(routes.LANDLORD_SETUPPIN2)}
            size={35}
            color={colors.white}
            name="arrow-right"
          />
        }
        backSpaceComponent={
          <MaterialCommunityIcons
            size={35}
            color={colors.white}
            name="chevron-left"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    width,
    display: "flex",
    justifyContent: "space-around",
  },
  keyPadText: {
    fontSize: 35,
  },
  txt: {
    color: colors.white,
    fontSize: 25,
    textAlign: "center",
  },
});
export default PinSetup;
