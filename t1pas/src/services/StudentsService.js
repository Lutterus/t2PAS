import { AsyncStorage } from "react-native";
const global = require('../util/util.js.js')

export default class StudentsService {
    getAll = async () => {
        let url = global.BASE + global.GETALLSTUDENTS;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.data
            })
            .catch((error) => {
                return false;
            });
    }

    setCurrentStudent = async (login) => {
        try {
            await AsyncStorage.setItem('login', login);
            return true
        } catch (error) {
            return false
        }
    }

    getCurrentStudent = async () => {
        try {
            const value = await AsyncStorage.getItem('currentStudent');
            if (value !== null) {
                // We have data!!
                return value;
            }
        } catch (error) {
            return false;
        }
    }

    avaliate = async (currentStudent, arrayData) => {
        let url = global.BASE + global.AVALIATE + currentStudent;
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                softwareFuncionando: arrayData.softwareFuncionando,
                processo: arrayData.processo,
                pitch: arrayData.pitch,
                inovacao: arrayData.inovacao,
                formacaoDoTime: arrayData.formacaoDoTime
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

    getSpecificTeam = async (currentStudent) => {
        let url = global.BASE + global.SPECIFICTEAM + currentStudent;
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
