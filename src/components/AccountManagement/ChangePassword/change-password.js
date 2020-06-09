import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PasswordView from '../../Common/password-view'
import TouchableButton from './../../Common/touchable-button';

const ChangePassword = (props) => {
    return (
        <View style={styles.container}>
            <PasswordView title="Old password"></PasswordView>
            <PasswordView title="New password"></PasswordView>
            <PasswordView title="Confirm new password"></PasswordView>

            <TouchableButton title="CONFIRM"></TouchableButton>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
    },
})
