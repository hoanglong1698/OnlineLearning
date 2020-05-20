import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import InputView from '../../Common/input-view'
import PasswordView from '../../Common/password-view'

const Login = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Online{'\n'}Learning</Text>

            <InputView title="Email"></InputView>
            <PasswordView></PasswordView>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.questionText}>Don't have account?{' '}
                     <Text style={styles.signUpText}>
                         Sign Up.
                     </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#2c3051",
        marginBottom: 40,
        textAlign: 'center'
    },
    
    forgot: {
        color: "#2c3051",
        fontSize: 11
    },

    loginBtn: {
        width: "80%",
        backgroundColor: "#ffc226",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 20
    },

    loginText: {
        fontWeight: 'bold',
        color: "white"
    },

    signUpText: {
        fontWeight: 'bold',
        color: "#2c3051",
        fontSize: 12
    },

    questionText: {
        color: '#a1a1a1',
        fontSize: 12
    }
});