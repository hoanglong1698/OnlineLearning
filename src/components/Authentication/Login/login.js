import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { color, screenName } from '../../../globals/constants'
import { AuthenticationContext } from '../../../provider/authentication-provider'
import { ThemeContext } from '../../../provider/theme-provider';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        if (authContext.state.isAuthenticated) {
            props.navigation.push(screenName.bottomTabScreen);
        }
    }, [authContext.state.isAuthenticated])

    const renderLoginStatus = (status) => {
        if (!status) {
            return;
        }
        else if (status.status === 200) {
            return;
        }
        else {
            return Alert.alert(status.errorString);
        }
    }
    return <ThemeContext.Consumer>
        {
            ({ setTheme }) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.logo}>Online{'\n'}Learning</Text>

                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder='Username'
                                placeholderTextColor={color.placeholderTextColor}
                                onChangeText={text => setUsername(text)}
                            />
                        </View>

                        <View style={styles.passwordView} >
                            <TextInput
                                secureTextEntry={true}
                                style={styles.inputText}
                                placeholder='Password'
                                placeholderTextColor={color.placeholderTextColor}
                                onChangeText={text => setPassword(text)}
                            />
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.forgot}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                authContext.login(username, password)
                            }}
                        >
                            <Text style={styles.signInText}>SIGN IN</Text>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <Text style={styles.questionText}>Don't have account?{' '}
                                <Text style={styles.signUpText}>
                                    Sign Up.
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
        marginVertical: 30,
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
    }
});