import React, { useRef } from "react";
import { Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { _TIME_LINE_VALUES } from "../../hooks/useStocks";
const Chart = ({ sparkline }: { sparkline: string[] }) => {
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
            labels: [],
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
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: () => "#000",
          }}
          bezier
          style={{
            paddingRight: 0,
          }}
        />
      </ScrollView>
    </>
  );
};

export default Chart;
