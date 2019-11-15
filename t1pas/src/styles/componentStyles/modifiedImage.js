import { Dimensions } from "react-native";
const genericComponent = {
    flex: 3,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.1,
    resizeMode: 'stretch',
    justifyContent: 'center',
}

export default genericComponent;