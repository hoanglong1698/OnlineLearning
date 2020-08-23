import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import InputView from '../../Common/input-view'
import PasswordView from '../../Common/password-view'
import TouchableButton from '../../Common/touchable-button'
import { color } from '../../../globals/constants'

const Login = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Online{'\n'}Learning</Text>

            <InputView title="Email" secure="False"></InputView>
            <PasswordView title="Password"></PasswordView>

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableButton title="SIGN IN"></TouchableButton>
            </View>


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
        paddingHorizontal: 50,
    },

    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: color.headerText,
        marginBottom: 40,
        textAlign: 'center'
    },

    forgot: {
        color: color.headerText,
        fontSize: 11
    },

    button: {
        marginVertical: 20,
        alignSelf: 'stretch',
    },

    signUpText: {
        fontWeight: 'bold',
        color: color.headerText,
        fontSize: 12
    },

    questionText: {
        color: '#a1a1a1',
        fontSize: 12
    }
});