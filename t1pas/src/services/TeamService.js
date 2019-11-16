const global = require('../util/util.js')

export default class TeamService {
    get = async (login) => {
        let url = global.BASE + global.GETTEAM + login
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

    getAll = async () => {
        let url = global.BASE + global.GETALLTEAM
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

    clean = async (login) => {
        let url = global.BASE + global.CLEANTEAM + login
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

    edit = async (login, arrayData) => {
        let url = global.BASE + global.EDITTEAM + login;
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time: arrayData
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false
            });
    }
}
