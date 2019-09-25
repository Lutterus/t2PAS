import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Text,
    Alert,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
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

const styles = StyleSheet.create({
    viewBackground: {
        backgroundColor: '#256CA0',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    Image: {
        flex: 4,
        width: Dimensions.get("window").width * 0.9,
        height: Dimensions.get("window").height * 0.1,
        resizeMode: 'stretch',
        justifyContent: 'center',
    },
    underBackGround: {
        flex: 1,
        justifyContent: 'center',

    },
    TouchableOpacity: {
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: '#000',

        width: Dimensions.get("window").width * 0.90,
        height: Dimensions.get("window").height * 0.07,

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
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 10,
        color: "white"

    },
    TouchableOpacityTeamColor:{
        backgroundColor: '#59BDB5',
    },
    TouchableOpacityUnsSubColor:{
        backgroundColor: '#EE4445',
    }
});
