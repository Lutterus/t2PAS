import React from "react";
import { View } from "react-native";
import AddTeamContainer from "../containers/AddTeamContainer";

class AddTeamScreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Alunos",
      //header todo
      headerStyle:{
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

      //headerLeft: null,
      headerRight: (
        <View>
        </View>
      )
    };
  };

  render() {
    return <AddTeamContainer navigation={this.props.navigation} />;
  }
}

export default AddTeamScreen;
