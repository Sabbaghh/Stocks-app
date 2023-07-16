import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../Themed";
import Icon from "../Icon";
import { View } from "react-native";
import Colors from "../../constants/Colors";

function Search() {
  return (
    <View style={styles.container}>
      <Icon color={Colors.light.background} name="search" size={25} />
      <View style={styles.search}>
        <Text style={{ color: "#ccc" }}>Search stocks</Text>
      </View>
    </View>
  );
}

const _PADDING = 10;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: _PADDING,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
  },
  search: {
    paddingLeft: _PADDING,
    flex: 1,
  },
});

export default Search;
