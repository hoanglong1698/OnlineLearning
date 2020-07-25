import React from 'react'
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {
    return (
        <ImageBackground style={styles.button} source= {{uri: props.sourceImage}}>
            <TouchableOpacity style={styles.touch} onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 10
    },

    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
