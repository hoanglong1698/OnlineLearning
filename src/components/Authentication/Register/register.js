import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import InputView from '../../Common/input-view'
import { color } from '../../../globals/constants'
import PasswordView from '../../Common/password-view'
import TouchableButton from '../../Common/touchable-button'

const Register = (props) => {
    return (
        <View style={styles.container}>
            <InputView title="Your Name"></InputView>
            <InputView title="Username"></InputView>
            <InputView title="Email"></InputView>
            <PasswordView title="Password"></PasswordView>
            <PasswordView title="Confirm Password"></PasswordView>

            <TouchableButton title="SIGN UP"></TouchableButton>
            
            <TouchableOpacity>
                <Text style={styles.questionText}>Have an account?{' '}
                     <Text style={styles.signUpText}>
                         Sign In.
                     </Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
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

export default Register
