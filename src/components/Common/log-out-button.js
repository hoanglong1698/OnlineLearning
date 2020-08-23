import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { color } from '../../globals/constants'

const LogoutButton = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontWeight: 'bold',
        color: color.buttonText
    },
})


export default LogoutButton
