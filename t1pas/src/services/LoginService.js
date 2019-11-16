const global = require('../util/util.js');

export default class FetchService {
    login = async (login) => {
        let url = global.BASE + global.LOGIN + login
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

}
