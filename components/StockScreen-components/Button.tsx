import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Button as StyledButton } from "@rneui/base";
const { width } = Dimensions.get("window");
const Button = () => {
  return (
    <View
      style={{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <StyledButton
        buttonStyle={{
          backgroundColor: "#000",
          width: width * 0.9,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Add To Portfolio
        </Text>
      </StyledButton>
    </View>
  );
};

export default Button;
