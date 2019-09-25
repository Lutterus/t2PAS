import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import { AsyncStorage } from "react-native";
import FetchService from "../services/FetchService";

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
    }

    ButtonMethod = async () => {
        var value = await AsyncStorage.getItem('login');
        var url = "inscrever/" + value;
        const res = await this.FetchService.get(url);

        if (res === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            Alert.alert(
                "Tudo pronto!",
                "Seu processo de inscrição já começou! Aproveite e faça a sugestão de um time para você",
                [{ text: "OK", onPress: () => this.props.navigation.navigate("UserSubscribed") }]

            );
        }

    };

    render() {
        return (
            <View style={styles.viewBackground}>
                <View style={{ flex: 0.25 }}>

                </View>
                <Image style={styles.Image}
                    source={require("../../assets/hackatonaArte.png")}
                />
                <View style={styles.underBackGround}>
                    <TouchableOpacity
                        style={styles.TouchableOpacity}
                        onPress={this.ButtonMethod}>
                        <Text style={styles.buttonText}>INSCREVER-SE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBackground: {
        backgroundColor: '#256CA0',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    Image: {
        flex: 3,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.1,
        resizeMode: 'stretch',
        justifyContent: 'center',
    },
    underBackGround: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: Dimensions.get("window").height * 0.08,

    },
    TouchableOpacity: {
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

    },
    buttonText: {
        //alignSelf: 'center',
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 10,
        color: "white"

    }
});
