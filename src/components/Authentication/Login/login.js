import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native'
import { color, screenName } from '../../../globals/constants'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { ThemeContext } from '../../../provider/theme-provider';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [IsLoading, setIsLoading] = useState(null);
    const authContext = useContext(AuthenticationContext);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [error, setError] = useState({
        isError: false,
        message: '',
    })

    useEffect(() => {
        if (authContext.state.isAuthenticated) {
            props.navigation.push(screenName.bottomTabScreen);
        }
    }, [authContext.state.isAuthenticated])

    const onPressSignup = () => {
        props.navigation.navigate(screenName.signupScreen);
    }

    const onPressForgotPassword = () => {
        props.navigation.navigate(screenName.forgotPasswordScreen);
    }

    const onPressSignIn = () => {
        setError({ isError: false });
        if (username === '' || password === '') {
            setError({ isError: true, message: "Vui lòng nhập thông tin" });
            return;
        }

        if (emailIsValid) {
            setIsLoading(true);
            authContext.login(username, password);

            if (!authContext.state.isAuthenticated) {
                setTimeout(() => {
                    setIsLoading(false);
                    setError({ isError: true, message: "Sai email hoặc mật khẩu" })
                }, 1500)
            }
        }
    }

    return <ThemeContext.Consumer>
        {
            ({ setTheme }) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.logo}>IT ONLINE{'\n'}LEARNING</Text>

                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder='Tài khoản'
                                placeholderTextColor={color.placeholderTextColor}
                                autoCapitalize='none'
                                onChangeText={text => {
                                    setError({ isError: false })
                                    text = text.trim();
                                    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                    if (validEmail.test(text)) {
                                        setEmailIsValid(true);
                                        setUsername(text);
                                    }
                                    else {
                                        setEmailIsValid(false);
                                    }
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
                                onChangeText={text => {
                                    setPassword(text);
                                    setError({ isError: false });
                                }}
                            />
                        </View>

                        <TouchableOpacity onPress={onPressForgotPassword}>
                            <Text style={styles.forgot}>Quên mật khẩu?</Text>
                        </TouchableOpacity>

                        {IsLoading === true && <ActivityIndicator size="large" />}
                        {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPressSignIn}
                        >
                            <Text style={styles.signInText}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={onPressSignup}>
                            <Text style={styles.questionText}>Chưa có tài khoản?{' '}
                                <Text style={styles.signUpText}>
                                    Đăng ký ngay.
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    </View >
                )
            }
        }
    </ThemeContext.Consumer>


}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },

    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: color.headerText,
        marginBottom: 40,
        textAlign: 'center'
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

    forgot: {
        color: color.headerText,
        fontSize: 11
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

    signUpText: {
        fontWeight: 'bold',
        color: color.headerText,
        fontSize: 12
    },

    questionText: {
        color: '#a1a1a1',
        fontSize: 12
    },

    error: {
        marginTop: 10,
        textAlign: "center",
        color: 'red',
        fontWeight: 'bold',
    }
});