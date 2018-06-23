import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LoginScreen from "../Component/LoginScreen";
import LoginForm from '../Component/LoginForm';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default createBottomTabNavigator(
    {
        Login: LoginScreen,
        LoginForm:LoginForm,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Login') {
                    iconName = `ios-log-in${focused ? '' : '-outline'}`;
                }else if(routeName === 'LoginForm'){
                    iconName = `ios-alarm${focused?'':'-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);