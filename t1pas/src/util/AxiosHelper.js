import axios from "axios";
import config from "../config.js";

const BASE_URL = config.server;

const configureAxios = authToken => {
  console.warn(BASE_URL);
  console.warn("s");
  axios.defaults.baseURL = BASE_URL;
  if (authToken) axios.defaults.headers.common["Authorization"] = authToken;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};

export { configureAxios };
