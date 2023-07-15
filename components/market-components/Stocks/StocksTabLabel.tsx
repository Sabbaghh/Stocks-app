import React from "react";
import { Text } from "../../Themed";
interface TabBarLabelProps {
  focused: boolean;
  label: string;
}
const TabBarLabel = ({ focused, label }: TabBarLabelProps) => {
  return (
    <Text
      style={{
        color: focused ? "#fff" : "#ccc",
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {label}
    </Text>
  );
};
export default TabBarLabel;
