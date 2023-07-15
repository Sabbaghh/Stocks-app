import React from "react";
import { Text } from "../../Themed";
import { View, StyleSheet } from "react-native";
function StockCard() {
  return (
    <View style={styles.row}>
      <View style={[styles.col, { flex: 2 }]}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>DJIA</Text>
        <Text
          style={{ fontSize: 14, fontWeight: "300", color: "rgba(1,1,1,0.2)" }}
        >
          Dow Jones industr..
        </Text>
      </View>
      <View style={styles.col}>
        <Text>Chart</Text>
      </View>
      <View style={[styles.col, { flex: 2 }]}>
        <Text
          style={{ fontSize: 18, fontWeight: "bold", alignSelf: "flex-end" }}
        >
          $25,585.69
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "300",
            color: "red",
            alignSelf: "flex-end",
          }}
        >
          -38.56%
        </Text>
      </View>
    </View>
  );
}

const _PADDING = 20;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
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
