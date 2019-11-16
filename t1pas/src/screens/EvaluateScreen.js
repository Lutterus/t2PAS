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
import FetchService from "../services/FetchService";
import { CheckBox } from 'react-native-elements';
var tempstyles = require('../styles/CompositeStyles')
const styles = tempstyles.AvaluateStyle;
const styles2 = tempstyles.AvaluateStyle2;

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
    const res = await this.FetchService.avaliate(this.state.student);
    if (res === false) {
      Alert.alert(
        "Erro durante a autenticação",
        "Não foi possível conectar-se ao servidor",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert(
        "Sucesso",
        "Suas alterações foram salvas com sucesso",
        [{ text: "Ok", onPress: () => this.props.navigation.navigate("ListSubs") }]
      );
    }
  };

  componentDidMount = async () => {
    if (this.state.loading === false) {
      this.setState({ loading: true })
    }
    const res = await this.FetchService.getSpecificTeam();
    if (res === false) {
      Alert.alert(
        "Erro durante o login",
        "Não foi possível conectar-se ao servidor",
        [{ text: "OK" }]
      );
    } else {
      if (res[0].hasOwnProperty('softwareFuncionando')) {
        this.setState({ student: res[0] })
      } else {
        var data =
        {
          "softwareFuncionando": -1,
          "processo": -1,
          "pitch": -1,
          "inovacao": -1,
          "formacaoDoTime": -1
        }

        this.setState({ student: data })
      }
      this.setState({ loading: false })
      this.props.navigation.setParams({ saveChanges: this.saveChanges });
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
                {this.state.student.softwareFuncionando >= 0 &&
                  <CheckBox
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    checkedColor='green'
                    onPress={this.showSoftwareFuncionando}
                    checked={!this.state.checked}
                  />
                }
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
                {this.state.student.processo >= 0 &&
                  <CheckBox
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    checkedColor='green'
                    onPress={this.showProcesso}
                    checked={!this.state.checked}
                  />
                }
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
                {this.state.student.pitch >= 0 &&
                  <CheckBox
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    checkedColor='green'
                    onPress={this.showPitch}
                    checked={!this.state.checked}
                  />
                }
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
                {this.state.student.formacaoDoTime >= 0 &&
                  <CheckBox
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    checkedColor='green'
                    onPress={this.showFormacaoDoTime}
                    checked={!this.state.checked}
                  />
                }
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
                {this.state.student.inovacao >= 0 &&
                  <CheckBox
                    center
                    iconRight
                    iconType='material'
                    checkedIcon='done'
                    checkedColor='green'
                    onPress={this.showInovacao}
                    checked={!this.state.checked}
                  />
                }
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

export default EvaluateScreen;
