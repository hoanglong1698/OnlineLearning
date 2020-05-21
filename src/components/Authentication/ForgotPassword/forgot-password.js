import React from 'react'
import { View, StyleSheet } from 'react-native'
import { color } from '../../../globals/constants'
import TouchableButton from '../../Common/touchable-button'
import PasswordView from '../../Common/password-view'

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <PasswordView title="New password"></PasswordView>
            <PasswordView title="Confirm new password"></PasswordView>
            <TouchableButton title="Reset Password"></TouchableButton>
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

    text: {
        alignSelf: 'flex-start',
        color: color.headerText,
        fontSize: 12,
        marginBottom: 15,
    },
});

export default ForgotPassword
