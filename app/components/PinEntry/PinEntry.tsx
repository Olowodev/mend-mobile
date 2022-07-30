import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../utils/colors";

const PinEntry = ({ length }: { length: number }) => {
  console.log(length);
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((numb: number, index: number) => {
        return (
          <View
            key={index}
            style={[
              styles.circle,
              length >= numb
                ? {
                    backgroundColor: colors.white,
                    borderColor: colors.white,
                  }
                : { backgroundColor: colors.primary },
            ]}
          ></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
});
export default PinEntry;
