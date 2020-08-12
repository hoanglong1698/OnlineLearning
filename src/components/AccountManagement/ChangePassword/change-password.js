import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const ChangePassword = (props) => {
    const authContext = useContext(AuthenticationContext)

    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState({
        old: '',
        new: '',
    })
    const [isValid, setIsValid] = useState({
        old: true,
        new: true,
        confirm: true,
        same: false,
    });
    const [isEdited, setIsEdited] = useState(false);
    const [error, setError] = useState({
        isError: false,
        message: '',
    })

    const onPressConfirm = () => {
        setError({ isError: false })
        if (isValid.old && isValid.new && isValid.confirm && !isValid.same && isEdited) {
            setIsLoading(true);

            axios.post('https://api.itedu.me​/user/change-password', {
                id: authContext.state.userInfo.id,
                oldPass: info.old,
                newPass: info.new
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    props.navigation.navigate(screenName.changePasswordSuccessfully);
                })
                .catch(function (error) {
                    setTimeout(() => {
                        setIsLoading(false);
                        setError({ isError: true, message: error.response.data.message })
                    }, 500)
                });
        }
        else {
            setError({ isError: true, message: "Vui lòng nhập thông tin" })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder='Mật khẩu cũ'
                    placeholderTextColor={color.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        setIsEdited(true);
                        setError({ isError: false })
                        if (text.length < 8) {
                            setIsValid({ ...isValid, old: false });
                        }
                        else {
                            setIsValid({ ...isValid, old: true });
                            setInfo({ ...info, old: text })
                        }
                    }}
                />
            </View>
            {!isValid.old && <Text style={{ color: 'red' }}>Mật khẩu từ 8 đến 20 ký tự</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder='Mật khẩu mới'
                    placeholderTextColor={color.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        setError({ isError: false })
                        if (text.length < 8) {
                            setIsValid({ ...isValid, new: false });
                        }
                        else {
                            setIsValid({ ...isValid, new: true });
                            if (text === info.old) {
                                setIsValid({ ...isValid, same: true, new: true });
                            }
                            else {
                                setIsValid({ ...isValid, same: false, new: true });
                                setInfo({ ...info, new: text })
                            }
                        }
                    }}
                />
            </View>
            {!isValid.new && <Text style={{ color: 'red' }}>Mật khẩu từ 8 đến 20 ký tự</Text>}
            {isValid.same && <Text style={{ color: 'red' }}>Mật khẩu mới phải khác mật khẩu cũ</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder='Nhập lại mật khẩu mới'
                    placeholderTextColor={color.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        setError({ isError: false })
                        if (text !== info.new) {
                            setIsValid({ ...isValid, confirm: false });
                        }
                        else {
                            setIsValid({ ...isValid, confirm: true });
                        }
                    }}
                />
            </View>
            {!isValid.confirm && <Text style={{ color: 'red' }}>Mật khẩu không khớp</Text>}
            {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
            {isLoading === true && <ActivityIndicator size="large" />}
            <TouchableOpacity style={styles.button} onPress={onPressConfirm}>
                <Text style={styles.signUpText}>XÁC NHẬN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
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
})
