import React from "react";
import { Text } from "../Themed";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
interface HeaderProps {
  title: string;
}
function Header(props: HeaderProps) {
  const { title = "Markets" } = props;
  return (
    <View>
      <Text style={[styles.textStyles, { color: Colors.light.background }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  textStyles: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
export default Header;
