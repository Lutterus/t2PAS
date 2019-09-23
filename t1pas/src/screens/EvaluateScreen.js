import { HeaderBackButton } from 'react-navigation-stack';
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { AsyncStorage } from "react-native";
import FetchService from "../services/FetchService";
import { CheckBox } from 'react-native-elements';

type Props = {
  navigation: NavigationScreenProp<{}>
};

class EvaluateScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.FetchService = new FetchService();
    this.state = {
      student: [],
      loading: true,
      showSoftwareFuncionando: false,
      showProcesso: false,
      showPitch: false,
      showFormacaoDoTime: false,
      showInovacao: false,

    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Avaliação",
      //header todo
      headerStyle: {
        backgroundColor: '#003C61',
      },
      //cor dos 3 elementos
      headerTintColor: '#A8D8EF',
      //style do titulo
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        fontWeight: 'bold'
      },
      headerLeft: (
        <HeaderBackButton tintColor={'#A8D8EF'}
          onPress={() => navigation.navigate("ListSubs")} />
      ),
      headerRight: (
        <TouchableOpacity
          style={{
            paddingHorizontal: Dimensions.get("window").width * 0.05,
          }}
          onPress={navigation.getParam('saveChanges')}
        >
          <Text style={{ color: '#A8D8EF', textAlign: "center", fontWeight: 'bold', flexWrap: 'wrap' }}>SALVAR</Text>
        </TouchableOpacity>
      )
    };
  };
  saveChanges = async () => {
    var value = await AsyncStorage.getItem('currentStudent');
    let url = "http://192.168.0.11:3000/api/avaliacao/"+value
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        softwareFuncionando: this.state.student.softwareFuncionando,
        processo:  this.state.student.processo,
        pitch:  this.state.student.pitch,
        inovacao:  this.state.student.inovacao,
        formacaoDoTime:  this.state.student.formacaoDoTime
      }),
    }).then(
      Alert.alert(
        "Sucesso",
        "Suas alterações foram salvas com sucesso",
        [{ text: "Ok", onPress: () => this.props.navigation.navigate("ListSubs") }]
      )
    );
    
    

  };

  componentDidMount = async () => {
    if (this.state.loading===false) {
      this.setState({ loading: true })
    }
    var value = await AsyncStorage.getItem('currentStudent');
    var url = "inscrito/" + value;
    const res = await this.FetchService.get(url);
    if (res === false) {
      Alert.alert(
        "Erro durante o login",
        "Não foi possível conectar-se ao servidor",
        [{ text: "OK" }]
      );
    } else {
      this.setState({ student: res[0] })
      this.setState({ loading: false })
      this.props.navigation.setParams({ saveChanges: this.saveChanges});
    }

  }
  showSoftwareFuncionando = () => {
    this.setState({ showSoftwareFuncionando: !this.state.showSoftwareFuncionando })
  }
  softwareFuncionandoIncrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.softwareFuncionando = this.state.student.softwareFuncionando + 1;
      return { student };
    })
  }
  softwareFuncionandoDecrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.softwareFuncionando = this.state.student.softwareFuncionando - 1;
      return { student };
    })
  }
  ////////////////
  showProcesso = () => {
    this.setState({ showProcesso: !this.state.showProcesso })
  }
  processoIncrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.processo = this.state.student.processo + 1;
      return { student };
    })
  }
  processoDecrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.processo = this.state.student.processo - 1;
      return { student };
    })
  }
  ////////////////
  showPitch = () => {
    this.setState({ showPitch: !this.state.showPitch })
  }
  pitchIncrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.pitch = this.state.student.pitch + 1;
      return { student };
    })
  }
  pitchDecrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.pitch = this.state.student.pitch - 1;
      return { student };
    })
  }
  ////////////////
  showFormacaoDoTime = () => {
    this.setState({ showFormacaoDoTime: !this.state.showFormacaoDoTime })
  }
  formacaoDoTimeIncrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.formacaoDoTime = this.state.student.formacaoDoTime + 1;
      return { student };
    })
  }
  formacaoDoTimeDecrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.formacaoDoTime = this.state.student.formacaoDoTime - 1;
      return { student };
    })
  }
  ////////////////
  showInovacao = () => {
    this.setState({ showInovacao: !this.state.showInovacao })
  }
  inovacaoIncrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.inovacao = this.state.student.inovacao + 1;
      return { student };
    })
  }
  inovacaoDecrement = () => {
    this.setState(prevState => {
      let student = Object.assign({}, prevState.student);
      student.inovacao = this.state.student.inovacao - 1;
      return { student };
    })
  }
  ////////////////


  render() {
    if (this.state.loading === true) {
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );

    } else {
      return (
        <View style={styles.viewBackground}>
          <ScrollView style={styles.ScrollView}>
            <TouchableOpacity
              style={styles.buttonEvaluate}
              onPress={this.showSoftwareFuncionando}>
              <View style={styles.viewNameToRated}>
                <Text style={styles.buttonEvaluateText}>Software Funcionando</Text>
              </View>
              <View style={styles.viewToRated}>
                <CheckBox
                  center
                  iconRight
                  iconType='material'
                  checkedIcon='done'
                  uncheckedIcon='add'
                  checkedColor='green'
                  onPress={this.showSoftwareFuncionando}
                  checked={this.state.student.softwareFuncionando >= 0}
                />
              </View>
            </TouchableOpacity>
            {this.state.showSoftwareFuncionando &&
              <View style={styles2.view}>
                <View style={styles2.viewText}>
                  <Text style={styles2.text}>
                    Nota:
                                  </Text>
                  <Text style={styles2.text}>
                    {this.state.student.softwareFuncionando}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.softwareFuncionandoIncrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowUp.png")}
                    />

                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.softwareFuncionandoDecrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }

            <TouchableOpacity
              style={styles.buttonEvaluate}
              onPress={this.showProcesso}>
              <View style={styles.viewNameToRated}>
                <Text style={styles.buttonEvaluateText}>Processo</Text>
              </View>
              <View style={styles.viewToRated}>
                <CheckBox
                  center
                  iconRight
                  iconType='material'
                  checkedIcon='done'
                  uncheckedIcon='add'
                  checkedColor='green'
                  onPress={this.showProcesso}
                  checked={this.state.student.processo >= 0}
                />
              </View>
            </TouchableOpacity>
            {this.state.showProcesso &&
              <View style={styles2.view}>
                <View style={styles2.viewText}>
                  <Text style={styles2.text}>
                    Nota:
                                      </Text>
                  <Text style={styles2.text}>
                    {this.state.student.processo}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.processoIncrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowUp.png")}
                    />

                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.processoDecrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }

            <TouchableOpacity
              style={styles.buttonEvaluate}
              onPress={this.showPitch}>
              <View style={styles.viewNameToRated}>
                <Text style={styles.buttonEvaluateText}>Pitch</Text>
              </View>
              <View style={styles.viewToRated}>
                <CheckBox
                  center
                  iconRight
                  iconType='material'
                  checkedIcon='done'
                  uncheckedIcon='add'
                  checkedColor='green'
                  onPress={this.showPitch}
                  checked={this.state.student.pitch >= 0}
                />
              </View>
            </TouchableOpacity>
            {this.state.showPitch &&
              <View style={styles2.view}>
                <View style={styles2.viewText}>
                  <Text style={styles2.text}>
                    Nota:
                                  </Text>
                  <Text style={styles2.text}>
                    {this.state.student.pitch}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.pitchIncrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowUp.png")}
                    />

                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.pitchDecrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }

            <TouchableOpacity
              style={styles.buttonEvaluate}
              onPress={this.showFormacaoDoTime}>
              <View style={styles.viewNameToRated}>
                <Text style={styles.buttonEvaluateText}>Formação do Time</Text>
              </View>
              <View style={styles.viewToRated}>
                <CheckBox
                  center
                  iconRight
                  iconType='material'
                  checkedIcon='done'
                  uncheckedIcon='add'
                  checkedColor='green'
                  onPress={this.showFormacaoDoTime}
                  checked={this.state.student.formacaoDoTime >= 0}
                />
              </View>
            </TouchableOpacity>
            {this.state.showFormacaoDoTime &&
              <View style={styles2.view}>
                <View style={styles2.viewText}>
                  <Text style={styles2.text}>
                    Nota:
                                  </Text>
                  <Text style={styles2.text}>
                    {this.state.student.formacaoDoTime}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.formacaoDoTimeIncrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowUp.png")}
                    />

                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.formacaoDoTimeDecrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }

            <TouchableOpacity
              style={styles.buttonEvaluate}
              onPress={this.showInovacao}>
              <View style={styles.viewNameToRated}>
                <Text style={styles.buttonEvaluateText}>Inovação</Text>
              </View>
              <View style={styles.viewToRated}>
                <CheckBox
                  center
                  iconRight
                  iconType='material'
                  checkedIcon='done'
                  uncheckedIcon='add'
                  checkedColor='green'
                  onPress={this.showInovacao}
                  checked={this.state.student.inovacao >= 0}
                />
              </View>
            </TouchableOpacity>
            {this.state.showInovacao &&
              <View style={styles2.view}>
                <View style={styles2.viewText}>
                  <Text style={styles2.text}>
                    Nota:
                                  </Text>
                  <Text style={styles2.text}>
                    {this.state.student.inovacao}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.inovacaoIncrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowUp.png")}
                    />

                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={this.inovacaoDecrement}>
                    <Image style={{ resizeMode: 'stretch', alignSelf: 'center' }}
                      source={require("../../assets/arrowDown.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  viewBackground: {
    flex: 1,
    backgroundColor: '#256CA0',
    flexDirection: "column",
    justifyContent: 'space-around',
  },
  ScrollView: {
    marginVertical: Dimensions.get("window").height * 0.03,
  },
  buttonEvaluate: {
    marginTop: 8,
    flexDirection: 'row',
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
  viewNameToRated: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonEvaluateText: {
    padding: 10,
    fontSize: 18,
    flexWrap: 'wrap',
    color: '#9FB8CE',
    fontWeight: 'bold',
  },
  viewToRated: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

});

const styles2 = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: Dimensions.get("window").width * 0.85,
    backgroundColor: '#012640',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  viewText: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
    flexWrap: 'wrap',
    color: '#A8D8EF'
  }
});

export default EvaluateScreen;
