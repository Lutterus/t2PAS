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
import FetchService from "../services/FetchService";
import { CheckBox } from 'react-native-elements';
import { AsyncStorage } from "react-native";
import { NavigationScreenProp, NavigationEvents } from "react-navigation";

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
        if (this.state.loading===false) {
            this.setState({ loading: true })
        }
        var url = "inscritos/";
        const res = await this.FetchService.get(url);
        if (res === false) {
            Alert.alert(
                "Erro durante o login",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            const students = []
            res.forEach(element => {
                students.push(element);      
            });
            this.setState({dados: students}) 
            this.setState({loading: false}) 
        }
        
    }

    ButtonMethod = async (item) => {
        AsyncStorage.setItem("currentStudent", item.nome);
        this.props.navigation.navigate("Evaluate")
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
                    <NavigationEvents onDidFocus={() => this.componentDidMount()}/>   
                    <View style={styles.viewNames}>
                        <FlatList style={{marginVertical: Dimensions.get("window").height * 0.03}}
                            data={this.state.dados}
                            extraData={this.state}
                            ref={e => (this.items = e)}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity 
                                style={styles.TouchableOpacityNames}
                                    onPress={() => this.ButtonMethod(item)}>
                                    <View style={styles.viewTouchableOpacity}>
                                        <View style={styles.viewToNames}>
                                        <Text style={[styles.item, styles.itemColor1]}>
                                            {item.nome}
                                        </Text>
                                        <Text style={[styles.item, styles.itemColor2]}>
                                            {item.curso}
                                        </Text>
                                        </View>
                                        <View style={styles.viewToRated}>
                                            <CheckBox
                                                center
                                                iconRight
                                                iconType='material'
                                                checkedIcon='done'
                                                uncheckedIcon='add'
                                                checkedColor='green'
                                                onPress={() => this.ButtonMethod(item)}
                                                checked={
                                                    item.softwareFuncionando>0 &&
                                                    item.processo > 0 &&
                                                    item.pitch > 0 &&
                                                    item.inovacao > 0 &&
                                                    item.formacaoDoTime > 0
                                                }
                                                
                                            />
                                        </View>
                                    
                                        
                                    </View>
                                    
                                </TouchableOpacity>
                            
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        
                        />
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width * 0.90,
    },
    TouchableOpacityNames: {
        marginTop: 8,
        justifyContent: 'space-between',
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: '#000',
        backgroundColor: '#012640',
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
      },
      viewTouchableOpacity:{
          flexDirection: 'row',
          justifyContent: 'space-between'
      },
      viewToNames:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      viewToRated:{
        flex: 0.25,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }
});
