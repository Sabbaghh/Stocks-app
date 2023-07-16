import React from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { Text } from "../Themed";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

const Header = ({
  symbol = "",
  name = "",
}: {
  symbol: string;
  name: string;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          size={50}
          color={Colors.light.text}
          name="md-arrow-back-circle-outline"
        />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{symbol}</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "rgba(1,1,1,0.5)",
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.light.background,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
});
export default Header;
