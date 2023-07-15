import React from "react";
import { Text } from "../Themed";
import { View, StyleSheet, Pressable } from "react-native";
import { StockType } from "../../hooks/useStocks";
import { Link } from "expo-router";
function StockCard(props: StockType) {
  const { name, symbol, price, uri, id } = props;
  return (
    <Link href={`stock/${id}`} asChild>
      <Pressable style={styles.row}>
        <View style={[styles.col, { flex: 2 }]}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{symbol}</Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: "rgba(1,1,1,0.2)",
            }}
          >
            {name}
          </Text>
        </View>
        {!isNaN(parseInt(price)) ? (
          <View style={[styles.col, { flex: 2 }]}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                alignSelf: "flex-end",
              }}
            >
              ${price}
            </Text>
          </View>
        ) : null}
      </Pressable>
    </Link>
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
