import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { color, screenName } from './../../../globals/constants';

export default function RegisterSuccessfully(props) {
    const onPressReturnLogin = () => {
        props.navigation.navigate(screenName.loginScreen);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>THÀNH CÔNG</Text>

            <Image source={require('../../../../assets/success.png')}
                style={styles.success}
            />
            <Text style={styles.text}>Vui lòng kiểm tra email để kích hoạt tài khoản trước khi đăng nhập</Text>

            <TouchableOpacity style={styles.button} onPress={onPressReturnLogin}>
                <Text style={styles.signInText}>Về trang đăng nhập</Text>
            </TouchableOpacity>
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
    },
    button: {
        marginVertical: 25,
        alignSelf: 'stretch',
        backgroundColor: color.button,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
    },
    signInText: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
    },
})
