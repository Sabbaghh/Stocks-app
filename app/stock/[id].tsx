import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

const Stock = () => {
  const { id } = useSearchParams();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text>Stock {id}</Text>
    </View>
  );
};

export default Stock;
