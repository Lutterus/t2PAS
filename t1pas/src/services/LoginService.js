import axios from "axios";
import type { Response } from "../util/types";
import AbstractService from "./AbstractService";

/**
 * BASE URLS of the service used on Category Service.
 */
const BASE_URL = "api/";

/**
 * URLS of the service used on Category Service.
 */
const RESOURCES = {
  LOGIN: BASE_URL + "getByNome/"
};

/**
 * Params used on services methods.
 */
const PARAMS = {
  SID: "sid"
};

/**
 * Class containing the http requests related to
 * category service.
 */
class LoginService extends AbstractService {
  constructor() {
    super();
  }

  /**
   * Service method to get the balance of the logged user account.
   * @param {*} dateBegin
   * @param {*} dateEnd
   */
  login(loginCurrentUser) {
    let URL = RESOURCES.LOGIN + loginCurrentUser;
    return this.axios
      .get(URL)
      .then((response: Response) => {
          console.log("resposta:" + response)
          console.log("resposta data:" + response.data)
          console.log("resposta data:" + response.data.nome)
        return response.data;
      })
      .catch((erro) => {
        return error.messages;
      });
  }

}

export default LoginService;
