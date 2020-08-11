import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { color } from '../../../globals/constants'
import { RegisterUser } from '../../../core/services/authentication-services'
const Register = (props) => {
    const onPressSignin = () => {
        props.navigation.goBack();
    }

    const [info, setInfo] = useState({
        name: '',
        password: '',
        email: '',
        phone: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true);
    const [phoneIsValid, setPhoneIsValid] = useState(true);

    const onPressSignUp = () => {
        if (isEdited && nameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid && phoneIsValid) {
            setIsLoading(true);

            RegisterUser(info);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} enabled behavior="height">
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Họ tên'
                    placeholderTextColor={color.placeholderTextColor}
                    autoCapitalize='words'
                    onChangeText={text => {
                        if (text.length < 2) {
                            setNameIsValid(false)
                        }
                        else {
                            setNameIsValid(true)
                        }
                        setInfo({ ...info, name: text });
                        setIsEdited(true);
                    }}
                />
            </View>
            {!nameIsValid && <Text style={{ color: 'red' }}>Họ tên ít nhất 2 ký tự</Text>}

            <View style={styles.inputView} >
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
                        setInfo({ ...info, email: text });
                    }}
                />
            </View>
            {!emailIsValid && <Text style={{ color: 'red' }}>Email không đúng định dạng</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder='Mật khẩu'
                    placeholderTextColor={color.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        if (text.length < 8) {
                            setPasswordIsValid(false);
                        }
                        else {
                            setPasswordIsValid(true);
                        }

                        setInfo({ ...info, password: text });
                    }}
                />
            </View>
            {!passwordIsValid && <Text style={{ color: 'red' }}>Mật khẩu từ 8 đến 20 ký tự</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder='Nhập lại mật khẩu'
                    placeholderTextColor={color.placeholderTextColor}
                    onChangeText={text => {
                        if (text !== info.password) {
                            setConfirmPasswordIsValid(false);
                        }
                        else {
                            setConfirmPasswordIsValid(true);
                        }
                    }}
                />
            </View>
            {!confirmPasswordIsValid && <Text style={{ color: 'red' }}>Mật khẩu không khớp</Text>}

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Điện thoại'
                    placeholderTextColor={color.placeholderTextColor}
                    keyboardType='numeric'
                    onChangeText={text => {
                        if (text.length < 10 || isNaN(text)) {
                            setPhoneIsValid(false)
                        }
                        else {
                            setPhoneIsValid(true)
                        }
                        setInfo({ ...info, phone: text });
                    }}
                />
            </View>
            {!phoneIsValid && <Text style={{ color: 'red' }}>Vui lòng nhập đúng số điện thoại</Text>}

            {isLoading === true && <ActivityIndicator size="large" />}
            <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
                <Text style={styles.signUpText}>ĐĂNG KÝ</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={onPressSignin}>
                <Text style={styles.questionText}>Đã có tài khoản?{' '}
                    <Text style={styles.signInText}>
                        Đăng nhập.
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
