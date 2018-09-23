//router.js
import React, {Component} from 'react';
import { View } from "react-native";
import { createStackNavigator,TabBarBottom ,createBottomTabNavigator,createSwitchNavigator,TabNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import SignInScreen from "../Component/SignInScreen";
import SignUpScreen from '../Component/SignUpScreen';
import HomScreen from '../Component/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Component/HomeScreen';
import DetailScreen from '../Component/DetailScreen';
import SettingScreen from '../Component/SettingScreen';

const Register =  createStackNavigator(
    {

        SignIn:{
            screen:SignInScreen,
            navigationOptions: {
                title: "Sign Up ",
                header:null
            }
        },
        SignUp: {
            screen:SignUpScreen,
            navigationOptions: {
                title: "Sign In",
                header:null
            }
        },
        HomScreen1: {
            screen:HomScreen,
            navigationOptions: {
                title: "Sign In",
                header:null
            }
        }
    });

const AppStack = createBottomTabNavigator({

    Home:{
        screen:HomeScreen
    },
    Detail:{
        screen:DetailScreen
    },
    Setting:{
        screen:SettingScreen
    }

})

const Route = createSwitchNavigator(
    {
        Authentication:Register,
        App:AppStack

    },
    {
        initialRouteName: 'Authentication',
    }
)
export default  Route