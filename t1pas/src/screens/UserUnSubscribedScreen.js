import React from "react";
import UserUnSubscribedContainer from "../containers/UserUnSubscribedContainer";

class UserUnSubscribedScreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return <UserUnSubscribedContainer navigation={this.props.navigation} />;
  }
}

export default UserUnSubscribedScreen;
