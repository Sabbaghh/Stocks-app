import React from "react";
import { Text } from "../../Themed";
import Colors from "../../../constants/Colors";
interface TabBarLabelProps {
  focused: boolean;
  label: string;
}
const TabBarLabel = ({ focused, label }: TabBarLabelProps) => {
  return (
    <Text
      style={{
        color: focused ? Colors.light.background : "#ccc",
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {label}
    </Text>
  );
};
export default TabBarLabel;
