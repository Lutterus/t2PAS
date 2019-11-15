import { Dimensions } from "react-native";

const genericComponent = {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get("window").width * 0.90,
}

export default genericComponent;