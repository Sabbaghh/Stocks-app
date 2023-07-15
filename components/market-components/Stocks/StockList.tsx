import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import StockCardLoader from "./StockCardLoader";
import StockCard from "./StockCard";
import { Divider } from "@rneui/themed";
function StocksList() {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={[...Array(6)]}
        renderItem={({ item }) => <StockCard />}
        keyExtractor={(item, index) => index.toString()}
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
