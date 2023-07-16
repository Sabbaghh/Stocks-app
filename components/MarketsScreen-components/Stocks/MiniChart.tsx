import { View, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
interface MiniChartProps {
  sparkline: number[];
  rise: boolean;
}
const MiniChart = ({ sparkline = [], rise = false }: MiniChartProps) => {
  return (
    <View>
      <LineChart
        bezier
        data={{
          labels: [],
          datasets: [
            {
              data: sparkline,
            },
          ],
        }}
        width={width * 5}
        height={height * 0.04}
        withOuterLines={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withInnerLines={false}
        withDots={false}
        withShadow={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        chartConfig={{
          strokeWidth: 2,
          width: 1,
          height: height * 0.025,
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: () => (rise ? "green" : "red"),
        }}
      />
    </View>
  );
};

export default MiniChart;
