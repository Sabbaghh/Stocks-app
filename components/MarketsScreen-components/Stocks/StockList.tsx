import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import StockCardLoader from "./StockCardLoader";
import StockCard from "./StockCard";
import { Divider } from "@rneui/themed";
import useStocks, { StockType } from "../../../hooks/useStocks";
import { useFocusEffect } from "expo-router";

function StocksList() {
  const { loading, stocks, getStocks } = useStocks();
  useFocusEffect(
    React.useCallback(() => {
      getStocks();
    }, [])
  );

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
        refreshing={false}
        onRefresh={getStocks}
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
