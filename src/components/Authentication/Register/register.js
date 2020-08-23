import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { color, screenName } from '../../../globals/constants'
import axios from 'axios';
import i18n from './../../../../utils/i18n';

const Register = (props) => {
    const onPressSignin = () => {
        props.navigation.goBack();
    }

    const [info, setInfo] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        confirm: '',
    })

    const [isValid, setIsValid] = useState({
        name: true,
        email: true,
        password: true,
        confirm: true,
        phone: true,
    })

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState({
        isError: false,
        message: '',
    })

    const onPressSignUp = () => {
        if (info.name === '' || info.email === '' || info.password === '' || info.confirm === '' || info.phone === '') {
            setError({ isError: true, message: i18n.t("PleaseFill") });
            return;
        }

        if (isValid.name && isValid.email && isValid.password && isValid.confirm && isValid.phone) {
            setIsLoading(true);
            setError({ isError: false });

            axios.post('https://api.itedu.me​/user/register', {
                name: info.name,
                email: info.email,
                phone: info.phone,
                password: info.password
            })
                .then(function (response) {
                    props.navigation.navigate(screenName.registerSuccessfullyScreen, { email: info.email });
                })
                .catch(function (error) {
                    setTimeout(() => {
                        setIsLoading(false);
                        setError({ isError: true, message: error.response.data.message })
                    }, 1000)
                });
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} enabled behavior="height">
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder={i18n.t("FullName")}
                    placeholderTextColor={color.placeholderTextColor}
                    autoCapitalize='words'
                    onChangeText={text => {
                        setError({ isError: false });
                        let invalidName = /[!@#$%^&*(),.?":{}|<>\d+$]/;
                        if (!invalidName.test(text) && text.length >= 2) {
                            setIsValid({ ...isValid, name: true })
                            setInfo({ ...info, name: text })
                        }
                        else {
                            setIsValid({ ...isValid, name: false })
                        }
                    }}
                />
            </View>
            {!isValid.name && <Text style={{ color: 'red' }}>{i18n.t("WrongName")}</Text>}

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Email'
                    placeholderTextColor={color.placeholderTextColor}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={text => {
                        setError({ isError: false });
                        text = text.trim();
                        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if (validEmail.test(text)) {
                            setIsValid({ ...isValid, email: true })
                            setInfo({ ...info, email: text });
                        }
                        else {
                            setIsValid({ ...isValid, email: false })
                        }
                    }}
                />
            </View>
            {!isValid.email && <Text style={{ color: 'red' }}>{i18n.t("WrongEmail")}</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder={i18n.t("Password")}
                    placeholderTextColor={color.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        setError({ isError: false });
                        if (text.length < 8) {
                            setIsValid({ ...isValid, password: false })
                        }
                        else {
                            setIsValid({ ...isValid, password: true })
                            setInfo({ ...info, password: text });
                        }
                    }}
                />
            </View>
            {!isValid.password && <Text style={{ color: 'red' }}>{i18n.t("WrongPassword")}</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder={i18n.t("ConfirmPassword")}
                    placeholderTextColor={color.placeholderTextColor}
                    onChangeText={text => {
                        setError({ isError: false });
                        if (text !== info.password) {
                            setIsValid({ ...isValid, confirm: false })
                        }
                        else {
                            setIsValid({ ...isValid, confirm: true })
                            setInfo({ ...info, confirm: text })
                        }
                    }}
                />
            </View>
            {!isValid.confirm && <Text style={{ color: 'red' }}>{i18n.t("PasswordNotMatch")}</Text>}

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder={i18n.t("Phone")}
                    placeholderTextColor={color.placeholderTextColor}
                    keyboardType='numeric'
                    maxLength={13}
                    onChangeText={text => {
                        setError({ isError: false });
                        if (text.length < 10 || isNaN(text)) {
                            setIsValid({ ...isValid, phone: false })
                        }
                        else {
                            setIsValid({ ...isValid, phone: true })
                            setInfo({ ...info, phone: text });
                        }
                    }}
                />
            </View>
            {!isValid.phone && <Text style={{ color: 'red' }}>{i18n.t("WrongNumber")}</Text>}

            {isLoading === true && <ActivityIndicator size="large" />}
            {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
                <Text style={styles.signUpText}>{i18n.t("RegisterButton")}</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={onPressSignin}>
                <Text style={styles.questionText}>{i18n.t("HaveAccount")}{' '}
                    <Text style={styles.signInText}>
                        {i18n.t("GobackLogin")}
                    </Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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

    passwordView: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
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

    signInText: {
        fontWeight: 'bold',
        color: color.headerText,
        fontSize: 12
    },

    questionText: {
        color: '#a1a1a1',
        fontSize: 12
    }
});

export default Register
