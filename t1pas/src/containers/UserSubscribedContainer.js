import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { AsyncStorage } from "react-native";
import FetchService from "../services/FetchService";
var tempstyles = require('../styles/CompositeStyles')
const styles = tempstyles.SubscribedStyle;

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
    }
    
    teamButtonMethod = async () => {
        this.props.navigation.navigate("EditTeam")

    };

    subButtonMethod = async () => {
        Alert.alert(
            "Cuidado!",
            "Você tem certeza que deseja cancelar sua inscrição?",
            [
                {text: "Confirmar", onPress: () =>  this.cancelSub()},
                {text: "Cancelar"}
            
            ]

        );
    };

    cancelSub = async () => {
        var value = await AsyncStorage.getItem('login');
        var url = "desInscrever/" + value;
        const res = await this.FetchService.get(url);
        if (res === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            this.props.navigation.navigate("UserUnSubscribed")
        }
    }

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
                        style={[styles.TouchableOpacity, styles.TouchableOpacityTeamColor]}
                        onPress={this.teamButtonMethod}>
                        <Text style={styles.buttonText}>SUGERIR TIME</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.underBackGround}>
                    <TouchableOpacity
                        style={[styles.TouchableOpacity, styles.TouchableOpacityUnsSubColor]}
                        onPress={this.subButtonMethod}>
                        <Text style={styles.buttonText}>CANCELAR INSCRIÇÃO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
