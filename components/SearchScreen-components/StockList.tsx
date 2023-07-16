import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import StockCardLoader from "../MarketsScreen-components/Stocks/StockCardLoader";
import StockCard from "./StockCard";
import { Divider } from "@rneui/themed";
import { StockType } from "../../hooks/useStocks";

interface Props {
  stocks: StockType[];
  loading: boolean;
}

function StocksList({ stocks, loading }: Props) {
  const renderStock = ({ item }: { item: StockType }) => {
    const { name, symbol, price, sparkline, rate, rise, id } = item;
    return (
      <StockCard
        id={id}
        name={name}
        symbol={symbol}
        price={price}
        sparkline={sparkline}
        rate={rate}
        rise={rise}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={loading ? [...Array(6)] : stocks}
        renderItem={!loading ? renderStock : () => <StockCardLoader />}
        keyExtractor={(item, index) => item?.id || index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default StocksList;
