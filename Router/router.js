import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LoginScreen from "../Component/LoginScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default createBottomTabNavigator(
    {
        Logoin: LoginScreen,
    },
{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if(routeName === 'Login'){
                iconName = `ios-log-in${focused ? '': '-outline'}`
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
            tabBarOptions:{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            },

}
);