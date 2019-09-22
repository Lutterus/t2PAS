import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EditTeamContainer from "../containers/EditTeamContainer";
import { HeaderBackButton } from 'react-navigation-stack';

class EditTeamSreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Seu Time",
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
      headerLeft: (
        <HeaderBackButton tintColor={'#A8D8EF'}
          onPress={() => navigation.navigate("UserSubscribed")} />
      ),
      headerRight: (
        <TouchableOpacity
          style={{
            paddingHorizontal: Dimensions.get("window").width * 0.05,
            //marginLeft: 10
          }}
          onPress={() => navigation.navigate("AddTeam")}
        >
          <Icon name={"plus"} size={20} color='#A8D8EF' />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return <EditTeamContainer navigation={this.props.navigation} />;
  }
}

export default EditTeamSreen;
