import React ,{ Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView, Image,Button } from 'react-native';




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    subformcontainer: {
        padding: 20
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    title: {
        color: '#FFF',
        marginTop: 5,
        width: 160,
        textAlign: 'center',
        opacity: 1.0
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'

    }
});

const SignUpScreen = (props)=>{
    console.log(props)
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles .logo} source={require('./Image/logo.png')}></Image>

                <Text style={styles.title}>Application for cats</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.subformcontainer}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <TextInput
                        placeholder="username or email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text onPress={()=>{props.navigation.navigate('App')}} style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Don't have an account yet?</Text>Text>
                        <Text title="Sign up" onPress={()=>{props.navigation.navigate('SignUp')}} style={styles.signupbutton}>Sign up</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default SignUpScreen