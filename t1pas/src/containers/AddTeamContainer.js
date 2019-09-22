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
import { NavigationScreenProp } from "react-navigation";
import FetchService from "../services/FetchService";
import { AsyncStorage } from "react-native";

type Props = {
    navigation: NavigationScreenProp<{}>
};

export default class HomeContainer extends Component {
    constructor(props: Props) {
        super(props);
        this.FetchService = new FetchService();
        this.state = {dados:[], loading: true, pressed: false, selected_category: []};
    }

    componentWillMount = async () => {
        var url = "todosAlunos/";
        const res = await this.FetchService.get(url);
        var value = await AsyncStorage.getItem('login');
        var url2 = "time/" + value;
        const res2 = await this.FetchService.get(url2);
        if (res === false || res2 === false) {
            Alert.alert(
                "Erro durante o login",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            const students = []
            res.forEach(element => {
                if(element.nome != res2[0].nome){
                    var valid = false;
                    res2[0].time.forEach(element2 => {
                        if(element2.nome===element.nome){
                            valid = true;
                        }else{
                        }
                    })  
                    
                    if(valid===false){
                        students.push(element);
                    }
                }
                            
            });
            this.setState({dados: students}) 
            this.setState({loading: false}) 
        }
        
    }
    saveButtonMethod = async () => {
        const toServer = []
        this.state.selected_category.forEach(element => {
            toServer.push(this.state.dados[element]);
        });
        var value = await AsyncStorage.getItem('login');

        var url = "time/" + value;
        const res = await this.FetchService.get(url);

        res[0].time.forEach(element => {
            toServer.push(element);
        });    

        const url2 = "newTime/" + value;
        const res2 = await this.FetchService.postTime(url2, toServer);
        if (res === false || res2 === false) {
            Alert.alert(
                "Erro durante o login",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            this.props.navigation.navigate("EditTeam")            
        }
        
       
    };

    _handleCategorySelect = index => {

        this.selectedArray = this.state.selected_category;
        
        if (this.selectedArray.indexOf(index) < 0) {
          this.selectedArray.push(index);
        } else {
          this.selectedArray.splice(this.selectedArray.indexOf(index), 1);
        }
        
        this.setState({ selected_category: this.selectedArray });};

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
                    <View style={{ flex: 0.25 }}>
    
                    </View>
    
                    <View style={styles.viewNames}>
                        <FlatList style={styles.flatlist}
                            data={this.state.dados}
                            extraData={this.state}
                            ref={e => (this.items = e)}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity 
                                style={[styles.TouchableOpacityNames,
                                    this.state.selected_category.indexOf(index.toString()) >= 0
                                        ? styles.Pressed
                                        : styles.NotPressed
                                    ]}
                                    onPress={() => this._handleCategorySelect(index.toString())}>
                                    <Text style={[styles.item, styles.itemColor1]}>
                                        {item.nome}
                                    </Text>
                                    <Text style={[styles.item, styles.itemColor2]}>
                                        {item.curso}
                                    </Text>
                                </TouchableOpacity>
                            
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        
                        />
                    </View>
                    <View style={styles.viewConfigButtons}>
                        <TouchableOpacity
                            style={[styles.TouchableOpacity, styles.TouchableOpacityAdd]}
                            onPress={this.saveButtonMethod}>
                            <Text style={styles.buttonText}>ADICONAR</Text>
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
    TouchableOpacityNames: {
        marginBottom: 8,
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
    Pressed:{
        backgroundColor: '#5187ac',
    },
    NotPressed:{
        backgroundColor: '#012640',
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
