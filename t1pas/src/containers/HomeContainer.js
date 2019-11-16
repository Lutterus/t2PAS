import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import FetchService from "../services/FetchService";
var tempstyles = require('../styles/CompositeStyles')
const styles = tempstyles.HomeStyle;

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
        this.state = { login: 'Professor' };
    }

    loginButtonMethod = async () => {
        const res = await this.FetchService.login(this.state.login);
        if (res === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            try {
                this.FetchService.setLogin(this.state.login);
                if (res[0].tipo === "Professor") {
                    this.props.navigation.navigate("ListSubs");
                } else {
                    if (res[0].inscrito === false) {
                        this.props.navigation.navigate("UserUnSubscribed");
                    } else {
                        this.props.navigation.navigate("UserSubscribed")
                    }
                }
            } catch (erro) {
                Alert.alert(
                    "Erro durante a autenticação",
                    "Alguma das credenciais está incorreta",
                    [{ text: "OK" }]
                );
            }
        }
    };

    render() {
        return (
            <View style={styles.viewBackground}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Image style={styles.Image}
                        source={require("../../assets/logo.jpg")}
                    />
                </View>

                <View style={{ flex: 0.1 }}>

                </View>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior="padding"
                >
                    <View style={styles.middleBackGround}>
                        <TextInput style={styles.textField}
                            value={this.state.text}
                            placeholder="Nome como no doc. de grupos"
                            placeholderTextColor="white"
                            onChangeText={(login) => { this.setState({ login }) }}
                            underlineColorAndroid="transparent"
                            textAlign={'center'}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.underBackGround}>
                        <TouchableOpacity
                            style={styles.TouchableOpacity}
                            onPress={this.loginButtonMethod}>
                            <Text style={styles.buttonText}>AVANÇAR</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}