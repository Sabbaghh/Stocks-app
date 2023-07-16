import { StyleSheet, SafeAreaView, Pressable, StatusBar } from "react-native";
import { View } from "../../components/Themed";
import {
  Stocks,
  Header,
  Search,
} from "../../components/MarketsScreen-components";
import Colors from "../../constants/Colors";
import { Link } from "expo-router";

export default function Market() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.light.tint,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.ItemContainer}>
          <Header title="Markets" />
        </View>
        <Link href={"/search"} asChild>
          <Pressable style={styles.ItemContainer}>
            <Search />
          </Pressable>
        </Link>

        <View style={styles.StocksContainer}>
          <Stocks />
        </View>
      </View>
    </SafeAreaView>
  );
}

const _PADDING = 20;
const styles = StyleSheet.create({
  ItemContainer: {
    backgroundColor: Colors.light.tint,
    paddingTop: _PADDING / 2,
    paddingBottom: _PADDING / 2,
    paddingLeft: _PADDING,
    paddingRight: _PADDING,
  },
  StocksContainer: {
    flex: 1,
  },
});
