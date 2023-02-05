import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
});

client.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "cf6b012a8f4aa1d8f965f77016661aca";
  return config;
});

export default client;
