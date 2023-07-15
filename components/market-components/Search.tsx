import React from "react";
import { StyleSheet,TextInput } from "react-native";
import Icon from "../Icon";
import { View } from "react-native";

function Search() {
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container} >
      <Icon color='#fff' name="search" size={25} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search markets"
      />
    </View>
  );
}

const _PADDING = 10;
const styles = StyleSheet.create({
  container :{
    flexDirection:'row',
    alignItems:'center',
    padding:_PADDING,
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:5,
  },
  input: {
    paddingLeft: _PADDING,
    flex:1,
  },
});

export default Search;
