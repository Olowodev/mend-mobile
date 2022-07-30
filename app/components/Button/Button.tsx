import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Button as BTN } from "react-native-paper";

type BtnType = {
  onPress?: any;
  style?: ViewStyle | ViewStyle[];
  contentStyle?: TextStyle | TextStyle[];
  mode?: "contained" | "outlined" | "text";
  children: any;
};

const Button = ({
  onPress,
  style,
  contentStyle,
  mode = "contained",
  children,
}: BtnType) => {
  return (
    <BTN
      onPress={onPress}
      contentStyle={[{ padding: 10 }, contentStyle]}
      mode={mode}
      style={[styles.btn, style]}
    >
      {children}
    </BTN>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
  },
});
export default Button;
