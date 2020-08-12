import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { color, screenName } from '../../../globals/constants'
import axios from 'axios';

const ForgotPassword = (props) => {
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState({
        isError: false,
        message: '',
    })

    const onPressSubmit = () => {
        props.navigation.navigate(screenName.sendEmailSuccessfully);
        // if (emailIsValid && isEdited) {
        //     setIsLoading(true);
        //     axios.post('https://api.itedu.me/user/forget-pass/send-email', {
        //         email: email,
        //     })
        //         .then(function (response) {
        //             props.navigation.navigate(screenName.registerSuccessfullyScreen);
        //         })
        //         .catch(function (error) {
        //             setTimeout(() => {
        //                 setIsLoading(false);
        //                 setError({ isError: true, message: error.response.data.message })
        //             }, 1000)
        //         });

        // }
        // else {
        //     setError({ isError: true, message: "Vui lòng nhập email" })
        // }
    }

    const renderError = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Email'
                    placeholderTextColor={color.placeholderTextColor}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={text => {
                        text = text.trim();
                        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if (validEmail.test(text)) {
                            setEmailIsValid(true)
                        }
                        else {
                            setEmailIsValid(false)
                        }
                        setEmail(text);
                        setIsEdited(true);
                        setError({ isError: false })
                    }}
                />
            </View>
            {!emailIsValid && <Text style={{ color: 'red' }}>Email không đúng định dạng</Text>}

            {isLoading === true && <ActivityIndicator size="large" />}
            {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
                <Text style={styles.signUpText}>Gửi mã xác nhận</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },

    inputView: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
    },

    inputText: {
        height: 45,
        color: color.inputText,
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

    signUpText: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
    },
});

export default ForgotPassword
