import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../../../constants/Colors";
import StockList from "./StockList";
import TabBarLabel from "./StocksTabLabel";
const Tab = createMaterialTopTabNavigator();

const dummyData = [
  {
    id: "1",
    name: "Main market",
  },
  {
    id: "2",
    name: "Junior market",
  },
  {
    id: "3",
    name: "FX Rates",
  },
  {
    id: "4",
    name: "Fund Market",
  },
];
function Stocks() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: Colors.light.tint },
        tabBarInactiveTintColor: "#ccc",
        tabBarLabel: ({ focused }) => (
          <TabBarLabel focused={focused} label={route.name} />
        ),
        tabBarIndicatorStyle: {
          display: "none",
        },
        tabBarScrollEnabled: true,
      })}
    >
      {dummyData.map((item) => (
        <Tab.Screen key={item.id} name={item.name} component={StockList} />
      ))}
    </Tab.Navigator>
  );
}

export default Stocks;
