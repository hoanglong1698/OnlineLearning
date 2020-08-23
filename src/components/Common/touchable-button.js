import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { color } from '../../globals/constants'

const TouchableButton = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        backgroundColor: color.button,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },

    text: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
    },
})


export default TouchableButton
