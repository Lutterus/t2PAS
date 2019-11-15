import { Dimensions } from "react-native";

const genericComponent = {
    marginBottom: 8,
    justifyContent: 'flex-start',
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: '#000',

    width: Dimensions.get("window").width * 0.85,
    height: 128,

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