import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const CategoryButton = (props) => {
    return (
        <ImageBackground style={styles.button} source= {{uri: 'https://cdn.pixabay.com/photo/2020/05/12/15/46/iceberg-5163649_960_720.jpg'}}>
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
