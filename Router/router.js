//router.js
import React, {Component} from 'react';
import { createStackNavigator,createDrawerNavigator ,createBottomTabNavigator,createSwitchNavigator,createTabNavigator} from 'react-navigation';
import SignInScreen from "../Component/SignInScreen";
import SignUpScreen from '../Component/SignUpScreen';
import HomScreen from '../Component/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Component/HomeScreen';
import DetailScreen from '../Component/DetailScreen';

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
    }
    Detail:{
        screen:DetailScreen
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