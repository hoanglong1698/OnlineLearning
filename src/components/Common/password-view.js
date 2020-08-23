import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { color } from '../../globals/constants'

const PasswordView = (props) => {
    return (
        <View style={styles.passwordView} >
            <TextInput
                secureTextEntry={true}
                style={styles.inputText}
                placeholder={props.title}
                placeholderTextColor={color.placeholderTextColor}
            //onChangeText={text => this.setState({ email: text })} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    passwordView: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
    },

    inputText: {
        height: 45,
        color: color.inputText,
    },
})

export default PasswordView
