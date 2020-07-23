import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import InputView from '../../Common/input-view'
import { color } from '../../../globals/constants'
import PasswordView from '../../Common/password-view'
import TouchableButton from '../../Common/touchable-button'

const Register = (props) => {
    const onPressSignin = () => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <InputView title="Họ tên"></InputView>
            <InputView title="Email"></InputView>
            <PasswordView title="Mật khẩu"></PasswordView>
            <PasswordView title="Nhập lại mật khẩu"></PasswordView>
            <InputView title="Điện thoại"></InputView>
            <View style={styles.button}>
                <TouchableButton title="SIGN UP"></TouchableButton>
            </View>


            <TouchableOpacity onPress={onPressSignin}>
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
        paddingHorizontal: 50,
    },

    button: {
        alignSelf: 'stretch',
        marginVertical: 20,
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
