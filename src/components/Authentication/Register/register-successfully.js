import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { color, screenName } from './../../../globals/constants';
import axios from 'axios';

export default function RegisterSuccessfully(props) {
    const [status, setStatus] = useState("Chưa nhận được email?");
    const [isLoading, setIsLoading] = useState(false);
    const onPressReturnLogin = () => {
        props.navigation.navigate(screenName.loginScreen);
    }

    const onPressSendEmail = () => {
        setIsLoading(true);
        axios.post('https://api.itedu.me​/user/send-activate-email', {
            email: props.route.params.email,
        })
            .then(function (response) {
                setTimeout(() => {
                    setStatus("Gửi email thành công");
                    setIsLoading(false);
                }, 1000)

                setTimeout(() => { setStatus("Chưa nhận được mã?") }, 5000)
            })
            .catch(function (error) {
                setTimeout(() => {
                    setStatus("Gửi email thất bại. Vui lòng thử lại sau");
                    setIsLoading(false);
                }, 1000)
                setTimeout(() => { setStatus("Chưa nhận được mã?") }, 5000)
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>THÀNH CÔNG</Text>

            <Image source={require('../../../../assets/success.png')}
                style={styles.success}
            />
            <Text style={styles.text}>Vui lòng kiểm tra email để kích hoạt tài khoản trước khi đăng nhập</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder={props.route.params.email}
                    placeholderTextColor={color.placeholderTextColor}
                    editable={false}
                />
            </View>

            {isLoading === true && <ActivityIndicator size="small" />}
            <Text style={{ color: color.headerText, marginBottom: 10 }}>{status}</Text>
            <TouchableOpacity style={{ ...styles.button, marginVertical: 0, marginBottom: 30 }} onPress={onPressSendEmail}>
                <Text style={styles.signInText}>Gửi lại</Text>
            </TouchableOpacity>

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

    inputView: {
        alignSelf: 'stretch',
        height: 40,
        marginVertical: 30,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
    },

    inputText: {
        height: 45,
        color: color.inputText,
    },
})
