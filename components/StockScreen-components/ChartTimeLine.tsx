import { View, TouchableOpacity } from "react-native";
import { Text } from "../Themed";
import React, { useState } from "react";
import { _TIME_LINE_VALUES } from "../../hooks/useStocks";
import Colors from "../../constants/Colors";

const _TIMELINE: { [key: string]: TimeLineProps } = {
  "7d": {
    value: _TIME_LINE_VALUES["7d"].value,
    active: _TIME_LINE_VALUES["7d"].active,
  },
  "24h": {
    value: _TIME_LINE_VALUES["24h"].value,
    active: _TIME_LINE_VALUES["24h"].active,
  },
  "30d": {
    value: _TIME_LINE_VALUES["30d"].value,
    active: _TIME_LINE_VALUES["30d"].active,
  },
};
interface ChartTimeLineProps {
  onChange: (value: string) => void;
}
interface TimeLineProps {
  value: string;
  active: boolean;
}
const ChartTimeLine = ({ onChange }: ChartTimeLineProps) => {
  const [timeLine, setTimeLine] = useState<TimeLineProps[]>(
    Object.values(_TIMELINE)
  );

  const handleTimeLinePress = (key: keyof typeof _TIMELINE) => {
    const formattedTimeLine: TimeLineProps[] = timeLine.map((item) => ({
      ...item,
      active: item.value === _TIMELINE[key].value,
    }));
    setTimeLine(formattedTimeLine);
    onChange(_TIMELINE[key].value);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {timeLine.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => handleTimeLinePress(item.value)}
          style={{
            padding: 10,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: item.active
              ? Colors.light.text
              : Colors.light.background,
          }}
        >
          <Text
            style={{
              color: !item.active ? Colors.light.text : Colors.light.background,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {item.value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChartTimeLine;
