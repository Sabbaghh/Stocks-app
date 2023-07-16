import { View, Text, StyleSheet } from "react-native";
import React from "react";

const StockPrice = ({
  price,
  rate,
  rise,
}: {
  price: string;
  rate: string;
  rise: boolean;
}) => {
  return (
    <View style={[styles.Container]}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>${price}</Text>
      <Text style={{ fontSize: 20, color: rise ? "green" : "red" }}>
        {rate}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
  },
});

export default StockPrice;
