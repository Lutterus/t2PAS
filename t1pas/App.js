import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import UserUnSubscribedScreen from "./src/screens/UserUnSubscribedScreen";
import UserSubscribedScreen from "./src/screens/UserSubscribedScreen";
import EditTeamSreen from "./src/screens/EditTeamSreen";
import AddTeamScreen from "./src/screens/AddTeamScreen";
import ListSubsScreen from "./src/screens/ListSubsScreen";
import EvaluateScreen from "./src/screens/EvaluateScreen";


const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  UserUnSubscribed: { screen: UserUnSubscribedScreen },
  UserSubscribed: { screen: UserSubscribedScreen },
  EditTeam: { screen: EditTeamSreen },
  AddTeam: { screen: AddTeamScreen },
  ListSubs: { screen: ListSubsScreen },
  Evaluate: { screen: EvaluateScreen },

});

const App = createAppContainer(MainNavigator);

export default App;