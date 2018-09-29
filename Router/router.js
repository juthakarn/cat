//router.js
import React, { Component } from 'react';
import { View } from "react-native";
import { createStackNavigator, TabBarBottom, createBottomTabNavigator, createSwitchNavigator, TabNavigator } from 'react-navigation';

import SignInScreen from "../Screen/SignInScreen";
import SignUpScreen from '../Screen/SignUpScreen';
import HomScreen from '../Screen/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screen/HomeScreen';
import DetailScreen from '../Screen/DetailScreen';
import SettingScreen from '../Screen/SettingScreen';
import tab1 from '../Screen/Tab1';
import HeaderStyles from "../HeaderStyle";
import CustomHeader from '../Component/CustomHeader'
let headerDefaultNavigationConfig = {
    header: props => <CustomHeader {...props} />,
    ...HeaderStyles
};
const Register = createStackNavigator(
    {

        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                title: "Sign Up ",
                header: null
            }
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: {
                title: "Sign In",
                header: null
            }
        },
        HomScreen1: {
            screen: HomScreen,
            navigationOptions: {
                title: "Sign In",
                header: null
            }
        }
    });

const Tab2Screen = createStackNavigator(
    {
        Tab2: {
            screen: tab1,
            navigationOptions: {
                headerLeft: null,
                headerTitle: "Tab 2 Screen"
            }
        },
        Tab2: {
            screen: DetailScreen,
            navigationOptions: {
                headerLeft: null,
                headerTitle: "Tab 2 Screen"
            }
        }
    }
);
const AppStack = createBottomTabNavigator({

    Home: {
        screen: Tab2Screen
    },
    Detail: {
        screen: DetailScreen,
    },
    Setting: {
        screen: SettingScreen
    }

},
    {
        navigationOptions: {
            ...headerDefaultNavigationConfig
        }
    })

const Route = createSwitchNavigator(
    {
        Authentication: Register,
        App: AppStack

    },
    {
        initialRouteName: 'Authentication',
    }
)
export default Route