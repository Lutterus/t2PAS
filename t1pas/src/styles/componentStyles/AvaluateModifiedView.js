import { Dimensions } from "react-native";

const genericComponent = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: Dimensions.get("window").width * 0.85,
    backgroundColor: '#012640',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
}

export default genericComponent;