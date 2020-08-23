import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { color } from '../../globals/constants'

const InputView = (props) => {
    return (
        <View style={styles.inputView} >
            <TextInput
                style={styles.inputText}
                placeholder={props.title}
                placeholderTextColor={color.placeholderTextColor}
                defaultValue={props.data}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
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

export default InputView
