import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    ActivityIndicator,
    Alert,
} from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
import FetchService from "../services/FetchService";
import { AsyncStorage } from "react-native";
var tempstyles = require('../styles/CompositeStyles')
const stylesNoTeam = tempstyles.EditTeamStyleOutside;
const styles = tempstyles.EditTeamStyleInside

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
        this.state = {dados:[], loading: true, possuiTime: false, valido:false, self:[]};
    }

    componentDidMount = async () => {
        if(this.state.loading===false){
            this.setState({loading: true}) 
        }
        var value = await AsyncStorage.getItem('login');
        var url = "myTime/" + value;
        const res = await this.FetchService.get(url);
        if (res === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            if(res.length!=0){
                this.setState({possuiTime: true}) 
                const students = []
                res[0].time.forEach(element => {
                    if(element.nome != value){
                        students.push(element);
                    }else{
                        this.setState({self: element}) 
                    }       
                });
                this.setState({dados: students})
                this.setState({valido: res[0].valido})
            }else{
                this.setState({possuiTime: false}) 
            }
             
            this.setState({loading: false}) 
        }
        
    }
    saveButtonMethod = async () => {
        var login = await AsyncStorage.getItem('login');
        var url = "editTime/" + login;
        var url2 = "cleanTime/" + login
        var toServer = []
        if(this.state.dados.length>0){
            toServer = this.state.dados
        }
        toServer.push(this.state.self)

        const res2 = await this.FetchService.get(url2);
        const res = await this.FetchService.postTime(url, toServer);

        if (res === false || res2 === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            this.componentDidMount()
            Alert.alert(
                "Sucesso",
                "Suas alterações foram salvas com sucesso",
                [{ text: "OK"}]
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
            
        }else if(this.state.possuiTime===false){
            return(
                <View style={styles.viewBackground}>
                    <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                    />
                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={stylesNoTeam.viewWarning}>
                        <Text style={stylesNoTeam.text1}>
                            Você ainda não possui um time cadastrado
                        </Text>
                        <Text style={stylesNoTeam.text2}>
                            Pressiona o "+" para adicionar pessoas ao seu time
                        </Text>
                    </View>
                    
                </View>
            );     
        }else{
            return (
                <View style={styles.viewBackground}>
                    <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                    />
                    <View style={{ flex: 0.35 }}>
                        {this.state.valido===true 
                            ? 
                            <Text style={[stylesNoTeam.text1, stylesNoTeam.cor1]}>
                                Time Válido
                            </Text>
                            :
                            <Text style={[stylesNoTeam.text1, stylesNoTeam.cor2]}>
                                Time Inválido
                            </Text>
                        }
                        
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
