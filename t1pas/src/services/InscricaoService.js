const global = require('../util/util.js')

export default class FetchService {
    Add = async (login) => {
        let url = global.BASE + global.SUB + login
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

    Remove = async (login) => {
        console.log("entrou no metodo")
        let url = global.BASE + global.UNSUB + login
        console.log("constuiu a URL: " + url)
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
