import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Skeleton } from "@rneui/base";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const _WIDTH_PERCENTAGE = (width * 100) / 100;
const _HEIGHT_PERCENTAGE = (height * 100) / 100;
function StockCardLoader() {
  return (
    <View style={styles.row}>
      <View style={[styles.col, { flex: 2 }]}>
        <Skeleton
          animation="wave"
          height={_HEIGHT_PERCENTAGE * 0.018}
          width={_WIDTH_PERCENTAGE * 0.1}
        />
        <Skeleton
          animation="wave"
          height={_HEIGHT_PERCENTAGE * 0.014}
          width={_WIDTH_PERCENTAGE * 0.3}
        />
      </View>
      <View style={styles.col}>
        <Skeleton
          animation="wave"
          height={_HEIGHT_PERCENTAGE * 0.035}
          width={_WIDTH_PERCENTAGE * 0.18}
        />
      </View>
      <View style={[styles.col, { flex: 2 }]}>
        <Skeleton
          animation="wave"
          height={_HEIGHT_PERCENTAGE * 0.018}
          width={_WIDTH_PERCENTAGE * 0.3}
          style={{ alignSelf: "flex-end" }}
        />
        <Skeleton
          animation="wave"
          height={_HEIGHT_PERCENTAGE * 0.014}
          width={_WIDTH_PERCENTAGE * 0.1}
          style={{ alignSelf: "flex-end" }}
        />
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
    paddingBottom: _PADDING + 10,
    paddingTop: _PADDING + 10,
    paddingLeft: _PADDING,
    paddingRight: _PADDING,
  },
  col: {
    flex: 1,
    gap: 2,
  },
});

export default StockCardLoader;
