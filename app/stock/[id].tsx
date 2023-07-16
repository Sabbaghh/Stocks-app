import React from "react";
import { View, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { useSearchParams } from "expo-router";
import {
  Header,
  StockPrice,
  Chart,
  StockDetails,
  Button,
  ChartTimeLine,
} from "../../components/StockScreen-components";
import useStocks, { StockDetailsType } from "../../hooks/useStocks";
import { useFocusEffect } from "expo-router";
import Colors from "../../constants/Colors";
const Stock = () => {
  const { stock, getStock } = useStocks();
  const { id } = useSearchParams() as { id: string };
  const {
    symbol,
    name,
    numberOfExchanges,
    numberOfMarkets,
    volume,
    rate,
    price,
    marketCap,
    sparkline,
    rise,
  } = stock as StockDetailsType;

  useFocusEffect(
    React.useCallback(() => {
      getStock(id);
    }, [])
  );

  const handleChangeTime = (time: string) => {
    getStock(id, time);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.light.background,
      }}
    >
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: Colors.light.background }}
        contentContainerStyle={{
          backgroundColor: Colors.light.background,
          gap: 20,
        }}
      >
        <Header symbol={symbol} name={name} />
        <StockPrice price={price} rate={rate} rise={rise} />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Chart sparkline={sparkline} />
          <ChartTimeLine onChange={handleChangeTime} />
        </View>
        <View style={{ flex: 1 }}>
          <StockDetails
            numberOfExchanges={numberOfExchanges}
            numberOfMarkets={numberOfMarkets}
            volume={volume}
            marketCap={marketCap}
          />
          <Button />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stock;
