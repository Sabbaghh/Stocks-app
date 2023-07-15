import axios from "axios";
import { API_KEY } from "../API_KEY.json";
export default axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});
