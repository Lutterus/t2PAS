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
import { NavigationScreenProp, NavigationEvents } from "react-navigation";
var tempstyles = require('../styles/CompositeStyles')
const styles = tempstyles.ListSubStyle;

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
        const res = await this.FetchService.getAllTeams();
        if (res === false) {
            Alert.alert(
                "Erro durante a autenticação",
                "Não foi possível conectar-se ao servidor",
                [{ text: "OK" }]
            );
        } else {
            this.setState({dados: res})
            this.setState({loading: false}) 
        }
        
    }

    ButtonMethod = async (item) => {
        const res = await this.FetchService.setCurrentStudent(item.time[0].nome);
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
                                            <FlatList
                                                data={item.time}
                                                renderItem={({ item, index }) => (
                                                    <Text style={{fontSize: 18,flexWrap: 'wrap',color: '#A8D8EF',padding: 10,}}>
                                                        {item.nome}
                                                    </Text>
                                                )}
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </View>
                                        <View style={styles.viewToRated}>
                                        {item.softwareFuncionando >= 0 &&
                                             item.processo >= 0 &&
                                             item.pitch >= 0 &&
                                             item.inovacao >= 0 &&
                                             item.formacaoDoTime >= 0 &&
                                            <View style={styles.hasTeam}>
                                             <CheckBox
                                                center
                                                iconRight
                                                iconType='material'
                                                checkedIcon='done'
                                                uncheckedIcon='add'
                                                checkedColor='green'
                                                onPress={() => this.ButtonMethod(item)}
                                                checked={!this.state.checked}
                                                
                                            />
                                             </View>
                                            }
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
