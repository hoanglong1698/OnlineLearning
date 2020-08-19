import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color, screenName } from './../../../globals/constants';
import { ThemeContext } from '../../../provider/theme-provider';

export default function ChangePasswordSuccessfully(props) {
    let [loading, setLoading] = useState(5);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        var timer = setInterval(() => {
            setLoading(loading => loading - 1);
        }, 1000);

        if (loading <= 0) {
            props.navigation.navigate(screenName.profileScreen);
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        }

    }, [loading]);

    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <Text style={{ ...styles.header, color: theme.headerText }}>THÀNH CÔNG</Text>

            <Image source={require('../../../../assets/success.png')}
                style={styles.success}
            />
            <Text style={{ ...styles.text, color: theme.headerText }}>Trở lại màn hình Profile trong {loading} giây</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
    },
    header: {
        fontSize: 30,
        color: color.headerText,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    success: {
        width: 100,
        height: 100,
        marginBottom: 25,
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
