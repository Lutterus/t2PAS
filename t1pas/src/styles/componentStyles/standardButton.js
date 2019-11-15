import { Dimensions } from "react-native";

const genericComponent = {
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: '#000',

    width: Dimensions.get("window").width * 0.90,
    height: Dimensions.get("window").height * 0.07,
    backgroundColor: '#59BDB5',

    borderRadius: 50,
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