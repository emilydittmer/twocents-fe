import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from 'react-redux';
import  { createStore }  from 'redux';
import { Icon } from 'react-native-elements';
import { rootReducer } from './src/reducers';
import { HomeScreen } from './src/components/HomeScreen';
import { SearchScreen } from './src/components/SearchScreen';
import { MenuScreen } from './src/components/MenuScreen';
import { UserScreen } from "./src/components/UserScreen";
import { SettingsScreen } from './src/components/SettingsScreen';
import { AboutScreen } from './src/components/AboutScreen';
import { LogInScreen } from './src/components/LogInScreen';

const store = createStore(rootReducer)

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'My TwoCents',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: ({ tintColor }) => <Icon name="menu" size={35} color={tintColor} />
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: '#EE933F',
    inactiveTintColor: '#CCC0DD',
    style: {
      backgroundColor: '#2C2540'
    }
  }
});

const Modal = createStackNavigator({
  Tab: TabNavigator,
  User: UserScreen,
  Settings: SettingsScreen,
  About: AboutScreen,
  // LogIn: LogInScreen,
},
{
  mode: 'modal',
  headerMode: 'float',
  defaultNavigationOptions: {
    
    headerStyle: {
      height: 0,
        backgroundColor: '#2C2540',
        borderBottomWidth: 0,
    },
  },
})

const Navigation = createAppContainer(Modal);

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LoggedIn: false,
    }
  }

  handleLogin = (signedIn) => {
    this.setState({LoggedIn: signedIn})
  }

  render() {
    return(
      <Provider store={store}>
        {this.state.LoggedIn && <Navigation/>}
        {!this.state.LoggedIn && <LogInScreen handleLogin={this.handleLogin}/>}
      </Provider>
    )
  }
}

export default App;
