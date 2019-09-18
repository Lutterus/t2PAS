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
import LoginService from "../services/LoginService";

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.loginService = new LoginService();
        this.state = { login: '' };
    }

    onPress = async () => {
        const res = await this.loginService.login(this.state.login);
        if (res === false) {
            Alert.alert(
                "Erro durante o login",
                "Alguma das credenciais está incorreta",
                [{ text: "OK" }]
            );
        } else {
            AsyncStorage.setItem("login", this.state.login);
            console.log(res.nome)
            //this.props.navigation.navigate("MilesList");
        }
    };

    render() {
        return (
            <View style={styles.viewBackground}>
                <Image style={styles.Image}
                    source={require("../../assets/logo.jpg")}
                />

                <View style={styles.middleBackGround}>
                    <TextInput
                        style={styles.credentialsInput}
                        value={this.state.text}
                        placeholder="Seu nome como no documento de grupos"
                        onChangeText={(login) => { this.setState({ login }) }}
                        underlineColorAndroid="transparent"
                    >
                    </TextInput>

                    <View style={styles.underBackGround}>
                        <TouchableOpacity
                            style={styles.TouchableOpacity}
                            onPress={this.onPress.bind(this)}>
                            <Text style={styles.buttonText}>AVANÇAR</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBackground: {
        flex: 1,
        backgroundColor: '#256CA0',
        flexDirection: "column",
        justifyContent: 'space-between'
    },
    Image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    middleBackGround: {
        flex: 1,
        alignSelf: 'center',
    },
    credentialsInput: {
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
        paddingTop: 10,
        width: Dimensions.get("window").width * 0.90,
        backgroundColor: 'white',
        top: Dimensions.get("window").height * 0.10,

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
