import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import UserUnSubscribedScreen from "./src/screens/UserUnSubscribedScreen";
import UserSubscribedScreen from "./src/screens/UserSubscribedScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  UserUnSubscribed: { screen: UserUnSubscribedScreen },
  UserSubscribed: { screen: UserSubscribedScreen },
});

const App = createAppContainer(MainNavigator);

export default App;