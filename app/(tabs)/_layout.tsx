import { Tabs } from "expo-router";
import Icon from "../../components/Icon";
import Colors from "../../constants/Colors";

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
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors["light"].tint,
        tabBarInactiveTintColor: Colors["light"].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors["light"].background,
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
