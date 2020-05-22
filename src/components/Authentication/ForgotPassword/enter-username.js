import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from '../../../globals/constants'
import InputView from '../../Common/input-view'
import TouchableButton from '../../Common/touchable-button'

const EnterUsername = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Enter your username to reset your password
                </Text>

            <InputView title="Username"></InputView>

            <TouchableButton title="Next"></TouchableButton>
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

    text: {
        alignSelf: 'flex-start',
        color: color.headerText,
        fontSize: 12,
        marginBottom: 15,
    },
});

export default EnterUsername
