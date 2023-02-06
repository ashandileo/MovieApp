import axios from "axios";

const client = axios.create({
  baseURL: process.env.API_HOST,
  headers: {
    Accept: "application/json",
  },
});

client.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = process.env.API_KEY;
  return config;
});

export default client;
