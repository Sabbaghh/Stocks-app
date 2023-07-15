import React from "react";
import { Text } from "../../Themed";
import { View, StyleSheet } from "react-native";
import MiniChart from "./MiniChart";
import { StockType } from "../../../hooks/useStocks";
function StockCard(props: StockType) {
  const { name, symbol, price, sparkline, rate, rise } = props;
  return (
    <View style={styles.row}>
      <View style={[styles.col, { flex: 2 }]}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{symbol}</Text>
        <Text
          numberOfLines={1}
          style={{ fontSize: 14, fontWeight: "300", color: "rgba(1,1,1,0.2)" }}
        >
          {name}
        </Text>
      </View>
      <View style={styles.col}>
        <MiniChart rise={rise} sparkline={sparkline} />
      </View>
      <View style={[styles.col, { flex: 2 }]}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", alignSelf: "flex-end" }}
        >
          ${price}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "300",
            color: rise ? "green" : "red",
            alignSelf: "flex-end",
          }}
        >
          {rise ? "+" : null}
          {rate}%
        </Text>
      </View>
    </View>
  );
}

const _PADDING = 20;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: _PADDING + 5,
    paddingTop: _PADDING + 5,
    paddingLeft: _PADDING,
    paddingRight: _PADDING,
  },
  col: {
    flex: 1,
    gap: 2,
  },
});

export default StockCard;
