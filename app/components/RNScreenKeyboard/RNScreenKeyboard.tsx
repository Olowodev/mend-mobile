import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  Image,
} from "react-native";

const rows: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export type RNScreenKeyboardType = {
  value: string | number;
  onKeyPress?(key: string): void;
  textStyle?: TextStyle;
  cellStyle?: ViewStyle;
  rowStyle?: ViewStyle;
  lastRowStyle?: ViewStyle;
  backSpaceComponent?: React.ReactNode;
  decimalComponent?: React.ReactNode;
};

const RNScreenKeyboard = ({
  value,
  onKeyPress,
  textStyle,
  cellStyle,
  rowStyle,
  backSpaceComponent,
  decimalComponent,
  lastRowStyle,
}: RNScreenKeyboardType) => {
  const handleKeyPress = (key: string) => {
    onKeyPress(`${value}${key}`);
  };
  const handleBackSpace = () => {
    onKeyPress(value.toString().substring(0, value.toString().length - 1));
  };
  const handleClear = () => {
    onKeyPress("");
  };
  return (
    <View style={styles.container}>
      {rows.map((row: number[], index: number) => {
        return (
          <Row
            textStyle={textStyle}
            cellStyle={cellStyle}
            rowStyle={rowStyle}
            onKeyPress={handleKeyPress}
            key={index}
            chars={row}
          />
        );
      })}
      <LastRow
        cellStyle={cellStyle}
        textStyle={textStyle}
        backSpaceComponent={backSpaceComponent}
        decimalComponent={decimalComponent}
        onKeyPress={handleKeyPress}
        onBackSpace={handleBackSpace}
        onLongBackSpace={handleClear}
        lastRowStyle={lastRowStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cell: {
    padding: 10,
    alignSelf: "stretch",
    minHeight: 50,
    minWidth: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  backspace: {
    resizeMode: "center",
  },
});

export type LastRowType = {
  // left?: React.ReactNode;
  // right?: React.ReactNode;
  // center?: React.ReactNode;
  onKeyPress?(key: string): void;
  onBackSpace?(): void;
  onLongBackSpace?(): void;
  backSpaceComponent?: React.ReactNode;
  decimalComponent?: React.ReactNode;
  textStyle: TextStyle;
  cellStyle?: ViewStyle;
  lastRowStyle?: ViewStyle;
};

const LastRow = ({
  // left,
  // right,
  // center,
  onKeyPress,
  onBackSpace,
  backSpaceComponent,
  textStyle,
  cellStyle,
  onLongBackSpace,
  lastRowStyle,
  decimalComponent,
}: LastRowType) => (
  <View style={[styles.row, lastRowStyle]}>
    {decimalComponent ? (
      <View style={[styles.cell, cellStyle]}>{decimalComponent}</View>
    ) : (
      <TouchableOpacity onPress={() => onKeyPress(".")}>
        <View style={[styles.cell, cellStyle]}>
          <Text style={[styles.text, textStyle]}>.</Text>
        </View>
      </TouchableOpacity>
    )}

    <TouchableOpacity onPress={() => onKeyPress("0")}>
      <View style={[styles.cell, cellStyle]}>
        <Text style={[styles.text, textStyle]}>0</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onLongPress={onLongBackSpace} onPress={onBackSpace}>
      {backSpaceComponent && (
        <View style={[styles.cell, cellStyle]}>{backSpaceComponent}</View>
      )}
    </TouchableOpacity>
  </View>
);

export type RowType = {
  chars: string[] | number[];
  rowStyle?: ViewStyle;
  cellStyle?: ViewStyle;
  textStyle?: TextStyle;
  onKeyPress?(key: string): void;
};

const Row = ({
  chars,
  rowStyle,
  onKeyPress,
  cellStyle,
  textStyle,
}: RowType) => (
  <View style={[styles.row, rowStyle]}>
    {chars.map((char: string | number, index: number) => {
      return (
        <Cell
          textStyle={textStyle}
          cellStyle={cellStyle}
          key={index}
          onKeyPress={onKeyPress}
          char={char}
        />
      );
    })}
  </View>
);

export type CellType = {
  char: string | number | React.ReactNode;
  onPress?(): void | any;
  textStyle?: TextStyle;
  cellStyle?: ViewStyle;
  onKeyPress?: void | any;
};

const Cell = ({
  char,
  onPress,
  textStyle,
  cellStyle,
  onKeyPress,
}: CellType) => (
  <TouchableOpacity onPress={() => onKeyPress(char)}>
    <View style={[styles.cell, cellStyle]}>
      <Text style={[styles.text, textStyle]}>{`${char}`}</Text>
    </View>
  </TouchableOpacity>
);
export default RNScreenKeyboard;
