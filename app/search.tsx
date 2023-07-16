import React, { useRef, useEffect, useCallback } from "react";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import Colors from "../constants/Colors";
import useStocks from "../hooks/useStocks";
import StocksList from "../components/SearchScreen-components/StockList";
import { useFocusEffect } from "expo-router";

const Search = () => {
  const { getStocks, stocks, loading, getSearchedStocks } = useStocks();
  const inputRef = useRef<any>(null);

  useFocusEffect(
    useCallback(() => {
      getStocks();
    }, [])
  );

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onSearch = useCallback(
    (value: string) => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      searchTimeoutRef.current = setTimeout(() => {
        if (value === "") {
          getStocks();
        } else {
          getSearchedStocks(value);
        }
      }, 1000);
    },
    [getStocks, getSearchedStocks]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View
        style={{
          backgroundColor: Colors["light"].tint,
          padding: 20,
        }}
      >
        <SearchBar onSearch={onSearch} inputRef={inputRef} />
      </View>
      <StocksList stocks={stocks} loading={loading} />
    </View>
  );
};

export default Search;
