import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color } from './../../../globals/constants';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/o-logo-png-4.png' }}></Image>
            <Text style={styles.text}>ONLINE</Text>
            <Text style={styles.text}>LEARNING</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.headerBar,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    logo: {
        marginVertical: 30,
        width: 100,
        height: 100,
    }
})
