import React from "react";
import UserSubscribedContainer from "../containers/UserSubscribedContainer";

class UserSubscribedScreen extends React.Component<Props, State> {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return <UserSubscribedContainer navigation={this.props.navigation} />;
  }
}

export default UserSubscribedScreen;
