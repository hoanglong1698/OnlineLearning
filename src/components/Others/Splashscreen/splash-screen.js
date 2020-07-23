import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color, screenName } from './../../../globals/constants';

const SplashScreen = (props) => {
    let [loading, setLoading] = useState(0);

    useEffect(() => {
        var timer = setInterval(() => {
            setLoading(loading => loading + 1);
        }, 10);

        if (loading >= 100) {
            props.navigation.navigate(screenName.loginScreen);
            clearInterval(timer);
        } 

        return () => {
            clearInterval(timer);
        }

    }, [loading]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/o-logo-png-4.png' }}></Image>
            <Text style={styles.text}>IT ONLINE</Text>
            <Text style={styles.text}>LEARNING</Text>
            <Text style={styles.loading}>Loading  {loading} %</Text>
        </View>
    )
}

export default SplashScreen
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
        marginBottom: 30,
        width: 100,
        height: 100,
    },

    loading: {
        color: 'white',
    }
})
