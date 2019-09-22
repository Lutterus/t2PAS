import React from "react";
import { View } from "react-native";
import { HeaderBackButton } from 'react-navigation-stack';
import UserUnSubscribedContainer from "../containers/UserUnSubscribedContainer";

class UserUnSubscribedScreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Bem Vindo",
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
          onPress={() => navigation.navigate("Home")} />
      ),
      headerRight: (
        <View>
        </View>
      )
    };
  };

  render() {
    return <UserUnSubscribedContainer navigation={this.props.navigation} />;
  }
}

export default UserUnSubscribedScreen;
