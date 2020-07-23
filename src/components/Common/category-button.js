import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const CategoryButton = (props) => {
    return (
        <ImageBackground style={styles.button} source= {{uri: props.sourceImage}}>
            <TouchableOpacity style={styles.touch} onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 75,
        margin: 10,
    },

    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    }
})
