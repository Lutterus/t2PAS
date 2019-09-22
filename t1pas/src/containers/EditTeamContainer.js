import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import FetchService from "../services/FetchService";
import { AsyncStorage } from "react-native";

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
        this.state = {dados:[], loading: true};
    }

    componentDidMount = async () => {
        if(this.state.loading===false){
            this.setState({loading: true}) 
        }
        var value = await AsyncStorage.getItem('login');
        var url = "time/" + value;
        const res = await this.FetchService.get(url);
        if (res === false) {
            Alert.alert(
                "Erro durante o login",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            this.setState({dados: res[0].time}) 
            this.setState({loading: false}) 
        }
        
    }
    saveButtonMethod = async () => {
        var value = await AsyncStorage.getItem('login');
        var url = "newTime/" + value;
        const res = await this.FetchService.postTime(url, this.state.dados);
        if (res === false) {
            Alert.alert(
                "Erro durante o login",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            Alert.alert(
                "Sucesso",
                "Suas alterações foram salvas com sucesso",
                [{ text: "OK" }]
            );
        }

    };

    namesButtonMethod = async (id) => {
        Alert.alert(
            "Cuidado!",
            "Você tem certeza que deseja excluir esta pessoa do seu time?",
            [
                {text: "Confirmar", onPress: () =>  this.deleteItemById(id)},
                {text: "Cancelar"}
            
            ]

        );
    };

    deleteItemById = id => {
        const filteredData = this.state.dados.filter(item => item.nome !== id);
        this.setState({ dados: filteredData });
    }
    render() {
        if(this.state.loading===true){
            return(
                <View style={[styles.container]}>
                <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
            
        }else{
            return (
                <View style={styles.viewBackground}>
                    <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                    />
                    <View style={{ flex: 0.25 }}>
    
                    </View>
    
                    <View style={styles.viewNames}>
                        <FlatList style={styles.flatlist}
                            data={this.state.dados}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.TouchableOpacityNames}
                                    onPress={() => this.namesButtonMethod(item.nome)}>
                                    <Text style={[styles.item, styles.itemColor1]}>
                                        {item.nome}
                                    </Text>
                                    <Text style={[styles.item, styles.itemColor2]}>
                                        {item.curso}
                                    </Text>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.viewConfigButtons}>
                        <TouchableOpacity
                            style={[styles.TouchableOpacity, styles.TouchableOpacityAdd]}
                            onPress={this.saveButtonMethod}>
                            <Text style={styles.buttonText}>SALVAR ALTERAÇÕES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    viewBackground: {
        backgroundColor: '#256CA0',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    viewNames: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width * 0.90,
    },
    viewConfigButtons: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    TouchableOpacityAdd: {
        backgroundColor: '#59BDB5',
    },
    TouchableOpacityNames:{
        marginBottom: 8,
        backgroundColor: '#012640',
        justifyContent: 'flex-start',
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: '#000',

        width: Dimensions.get("window").width * 0.85,
        height: Dimensions.get("window").height * 0.20,

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
    item: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        flexWrap: 'wrap'
    },
    itemColor1:{
        color: '#A8D8EF',
    },
    itemColor2:{
        color: '#9FB8CE',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
      }
});
