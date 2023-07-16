import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from "./Icon";
import { View } from "react-native";
import Colors from "../constants/Colors";

interface SearchBarProps {
  onSearch(value: string): void;
  inputRef: React.RefObject<TextInput>;
}

const SearchBar = ({ onSearch, inputRef }: SearchBarProps) => {
  const [text, setText] = useState("");

  const handleChangeText = (value: string) => {
    onSearch(value);
    setText(value);
  };

  return (
    <View style={styles.container}>
      <Icon color={Colors.light.background} name="search" size={25} />
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Search markets"
      />
    </View>
  );
};

const _PADDING = 10;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: _PADDING,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
  },
  input: {
    paddingLeft: _PADDING,
    flex: 1,
    color: "#fff",
  },
});

export default SearchBar;
