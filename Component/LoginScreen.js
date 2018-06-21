import React ,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default class  LoginScreen extends Component{
    render(){
        return(
            <View style={style.wrapper}>
                <View style={style.titleWrapper}>
                    <Text style={style.title}>Hello World</Text>
                </View>
                <View style={style.titleWrapper}>
                    <Text style={style.subtitle}>A Little Princes</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    }
});