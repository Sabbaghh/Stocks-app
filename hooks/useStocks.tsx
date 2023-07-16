import { useState } from "react";
import axios from "../lib/axios";

export interface StockType {
  name: string;
  symbol: string;
  price: string;
  sparkline: string[];
  rate: string;
  rise: boolean;
  id: string;
}
export interface StockDetailsType extends StockType {
  marketCap: string;
  volume: string;
  numberOfMarkets: string;
  numberOfExchanges: string;
}
export const _TIME_LINE_VALUES = {
  "7d": {
    value: "7d",
    labels: ["1d", "2d", "3d", "4d", "5d", "6d", "7d"],
    active: false,
  },
  "24h": {
    value: "24h",
    labels: ["1h", "3h", "6h", "9h", "12h", "15h", "18h", "21h", "24h"],
    active: true,
  },
  "30d": {
    value: "30d",
    labels: ["1", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30"],
    active: false,
  },
};

const useStocks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [stocks, setStocks] = useState<StockType[]>([]);
  const [stock, setStock] = useState<StockDetailsType | {}>({});

  const formatStocks = (coins: any[]): StockType[] => {
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

  const formatStock = (stock: any): StockDetailsType => {
    const {
      name,
      symbol,
      price,
      sparkline,
      change,
      uuid,
      numberOfMarkets,
      marketCap,
      numberOfExchanges,
    } = stock;
    const rise = change > 0;
    return {
      name,
      symbol,
      price: parseFloat(price).toFixed(2),
      sparkline,
      rate: parseFloat(change).toFixed(2),
      id: uuid,
      marketCap,
      volume: stock["24hVolume"],
      numberOfMarkets,
      numberOfExchanges,
      rise,
    };
  };

  const getStocks = async () => {
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: _TIME_LINE_VALUES["24h"].value,
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "20",
      offset: "0",
    };
    try {
      const { data } = await axios.get("/coins", { params });
      const { coins } = data.data;
      const formattedCoins = formatStocks(coins);
      setStocks(formattedCoins);
      setError(false);
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
      const formattedCoins = formatStocks(coins);
      setStocks(formattedCoins);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };

  const getStock = async (
    id: string,
    timePeriod: string = _TIME_LINE_VALUES["24h"].value
  ) => {
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod,
    };
    setLoading(true);
    try {
      const { data } = await axios.get(`/coin/${id}`, { params });
      const { coin } = data.data;
      const formattedStock = formatStock(coin);
      setStock(formattedStock);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };
  return {
    loading,
    error,
    stocks,
    getStocks,
    getSearchedStocks,
    getStock,
    stock,
  };
};

export default useStocks;
