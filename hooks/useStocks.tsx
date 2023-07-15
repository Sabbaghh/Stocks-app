import { useState, useEffect } from "react";
import axios from "../lib/axios";

export interface StockType {
  name: string;
  symbol: string;
  price: string;
  sparkline: number[];
  rate: string;
  rise: boolean;
  id: string;
}

const useStocks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [stocks, setStocks] = useState<StockType[]>([]);

  const formatCoins = (coins: any[]): StockType[] => {
    return coins.map((coin) => {
      const { name, symbol, price, sparkline, change, uuid } = coin;
      const rise = change > 0;
      return {
        name,
        symbol,
        price: parseFloat(price).toFixed(2),
        sparkline,
        rate: parseFloat(change).toFixed(2),
        rise,
        id: uuid,
      };
    });
  };

  const getStocks = async () => {
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "7d",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "20",
      offset: "0",
    };
    try {
      const { data } = await axios.get("/coins", { params });
      const { coins } = data.data;
      const formattedCoins = formatCoins(coins);
      setStocks(formattedCoins);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };

  const getSearchedStocks = async (search: string) => {
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      query: search,
    };
    setLoading(true);
    try {
      const { data } = await axios.get("/search-suggestions", { params });
      const { coins } = data.data;
      const formattedCoins = formatCoins(coins);
      setStocks(formattedCoins);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };

  return { loading, error, stocks, getStocks, getSearchedStocks };
};

export default useStocks;
