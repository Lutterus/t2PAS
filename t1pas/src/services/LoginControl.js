import { AsyncStorage } from "react-native";

export default class LoginControl {
    set = async (login) => {
        try {
            await AsyncStorage.setItem('login', login);
            return true
        } catch (error) {
            return false
        }
    }

    get = async () => {
        try {
            const value = await AsyncStorage.getItem('login');
            if (value !== null) {
              // We have data!!
              return value;
            }
          } catch (error) {
            return false;
          }
    }

}
