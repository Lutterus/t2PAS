import { Dimensions } from "react-native";

const genericComponent = {
    marginTop: 8,
    justifyContent: 'space-between',
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#012640',
    width: Dimensions.get("window").width * 0.85,

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