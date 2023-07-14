import { Tabs } from "expo-router";
import Icon from "../../components/Icon";
import Colors from "../../constants/Colors";
import { useColorScheme } from "react-native";

const _Tabs = [
  {
    name: "portfolio",
    title: "Portfolio",
    icon: "pie-chart-outline",
  },
  {
    name: "index",
    title: "Market",
    icon: "swap-vertical",
  },
  {
    name: "news",
    title: "News",
    icon: "newspaper-outline",
  },
];
export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = "light";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      {_Tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <Icon name={tab.icon} color={color} size={30} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
