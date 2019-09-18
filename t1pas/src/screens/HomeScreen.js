import React from "react";
import HomeContainer from "../containers/HomeContainer";

class HomeScreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return <HomeContainer navigation={this.props.navigation} />;
  }
}

export default HomeScreen;
