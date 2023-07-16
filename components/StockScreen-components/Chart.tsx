import React, { useRef } from "react";
import { Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { _TIME_LINE_VALUES } from "../../hooks/useStocks";
import Colors from "../../constants/Colors";
const Chart = ({
  sparkline,
  chartLabels,
}: {
  sparkline: string[];
  chartLabels: string[];
}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onLayout={() => {
          // Scroll to the end after layout is complete
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
      >
        <LineChart
          data={{
            labels: chartLabels,
            datasets: [
              {
                data: sparkline
                  ? sparkline.map((item) => parseFloat(item))
                  : [],
              },
            ],
          }}
          width={Dimensions.get("window").width * 2}
          height={Dimensions.get("window").height * 0.3}
          withVerticalLines={false}
          withHorizontalLines={false}
          withShadow={false}
          withDots={false}
          chartConfig={{
            height: Dimensions.get("window").height * 0.3,
            backgroundGradientFrom: Colors.light.background,
            backgroundGradientTo: Colors.light.background,
            color: () => Colors.light.text,
          }}
          bezier
          style={{
            paddingRight: -10,
          }}
        />
      </ScrollView>
    </>
  );
};

export default Chart;
