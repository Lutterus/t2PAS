import { Dimensions } from "react-native";

const genericComponent = {
    width: Dimensions.get("window").width * 0.80,
    height: Dimensions.get("window").height * 0.08,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: 'black',
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
}

export default genericComponent;