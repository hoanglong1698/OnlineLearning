import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { color } from '../../../globals/constants'
import axios from 'axios';

const ForgotPassword = () => {
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const onPressSubmit = () => {
        if (emailIsValid) {
            setIsLoading(true);
        }
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
                    }}
                />
            </View>
            {!emailIsValid && <Text style={{ color: 'red' }}>Email không đúng định dạng</Text>}

            {isLoading === true && <ActivityIndicator size="large" />}
            <TouchableOpacity style={styles.button}>
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
