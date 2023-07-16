import React from "react";
import { Text } from "../Themed";
import { StyleSheet, View } from "react-native";
interface HeaderProps {
  title: string;
}
function Header(props: HeaderProps) {
  const { title = "Markets" } = props;
  return (
    <View>
      <Text lightColor="#fff" darkColor="#fff" style={styles.textStyles}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    borderWidth:1,
  },
  textStyles: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
export default Header;
