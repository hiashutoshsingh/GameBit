// import React, { Component } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { createStackNavigator, createSwitchNavigator, } from 'react-navigation';
// import LoginScreen from './src/screens/LoginScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import PostScreen from './src/screens/PostScreen';
// import LogOutScreen from './src/screens/LogOutScreen';
// import FriendScreen from './src/screens/FriendScreen';
// import SettingScreen from './src/screens/SettingScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// import AnalyticScreen from './src/screens/AnalyticScreen';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// const AuthStackNavigator = createStackNavigator({
//   Welcome: WelcomeScreen,
//   Login: LoginScreen,
//   Home: HomeScreen,
//   Notification: NotificationScreen,
//   Friends: FriendScreen,
//   Settings: SettingScreen,
//   LogOut: LogOutScreen,
  

// })

// const AppTabNavigator = createMaterialBottomTabNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="home" color={tintColor} size={28} />
//       )
//     }
//   },
//   Post: {
//     screen: PostScreen,
//     navigationOptions: {
//       tabBarLabel: 'Exchange',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="autorenew" color={tintColor} size={24} />
//       )
//     }
//   },
  

//   Profile: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="person" color={tintColor} size={24} />
//       ) 
//     }
//   },

// }, {
//     activeTintColor: '#4282EE',
    


//   });

// const AppStackNavigator = createStackNavigator({
//   AppTabNavigator: {
//     screen: AppTabNavigator,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Insta Post',
     
//     })
//   } 
// })




// export default createSwitchNavigator({
//   AuthLoading: AuthLoadingScreen,
//   Auth: AuthStackNavigator,
//   App: AppStackNavigator,

// })

import React, { Component } from 'react'
import {Text,View} from 'react-native'

import CustomButton from './src/components/CustomButton'
import SignUpScreen from './src/screens/SignUpScreen'

export default class App extends Component {
  render() {
    return (
        <SignUpScreen/>
    )
  }
}
