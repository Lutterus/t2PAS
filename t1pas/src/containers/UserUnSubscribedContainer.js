import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import FetchService from "../services/FetchService";
var tempstyles = require('../styles/CompositeStyles')
const styles = tempstyles.UnsubscribedStyle;

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
    }

    ButtonMethod = async () => {
        const res = await this.FetchService.addInscricao();
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
