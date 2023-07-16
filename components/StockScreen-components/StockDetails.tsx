import { View, Text, StyleSheet } from "react-native";
import React from "react";
interface StockDetailsProps {
  numberOfExchanges: string;
  marketCap: string;
  Volume: string;
  numberOfMarkets: string;
}
const StockDetails = ({
  numberOfExchanges,
  marketCap,
  Volume,
  numberOfMarkets,
}: StockDetailsProps) => {
  return (
    <>
      <View style={styles.Container}>
        <Text style={{ fontWeight: "300", fontSize: 16 }}>Market Cap</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>${marketCap}</Text>
      </View>
      <View style={styles.Container}>
        <Text style={{ fontWeight: "300", fontSize: 16 }}>Volume</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>${Volume}</Text>
      </View>
      <View style={styles.Container}>
        <Text style={{ fontWeight: "300", fontSize: 16 }}>
          Number of exchanges
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {numberOfExchanges}
        </Text>
      </View>

      <View style={styles.Container}>
        <Text style={{ fontWeight: "300", fontSize: 16 }}>
          number of markets
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {numberOfMarkets}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
export default StockDetails;
