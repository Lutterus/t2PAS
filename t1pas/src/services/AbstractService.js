import axios from "axios";
import config from "../util/config";

export default class AbstractService {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: config.server
    });
  }
}
