import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';
import { ThemeContext } from '../../../provider/theme-provider';
import i18n from './../../../../utils/i18n';

const ChangePassword = (props) => {
    const authContext = useContext(AuthenticationContext)
    const { theme } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState({
        old: '',
        new: '',
        confirm: '',
    })
    const [isValid, setIsValid] = useState({
        old: true,
        new: true,
        confirm: true,
        same: false,
    });
    const [error, setError] = useState({
        isError: false,
        message: '',
    })

    const onPressConfirm = () => {
        setError({ isError: false })

        if (info.old === '' || info.new === '' || info.confirm === '') {
            setError({ isError: true, message: i18n.t("PleaseFill") });
            return;
        }

        if (isValid.old && isValid.new && isValid.confirm && !isValid.same) {
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
            setError({ isError: true, message: i18n.t("PleaseFill") })
        }
    }

    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={{ ...styles.inputText, color: theme.headerText }}
                    placeholder={i18n.t("OldPassword")}
                    placeholderTextColor={theme.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
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
            {!isValid.old && <Text style={{ color: 'red' }}>{i18n.t("WrongPassword")}</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={{ ...styles.inputText, color: theme.headerText }}
                    placeholder={i18n.t("NewPassword")}
                    placeholderTextColor={theme.placeholderTextColor}
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
            {!isValid.new && <Text style={{ color: 'red' }}>{i18n.t("WrongPassword")}</Text>}
            {isValid.same && <Text style={{ color: 'red' }}>{i18n.t("NewSameOld")}</Text>}

            <View style={styles.passwordView} >
                <TextInput
                    secureTextEntry={true}
                    style={{ ...styles.inputText, color: theme.headerText }}
                    placeholder={i18n.t("ConfirmPassword")}
                    placeholderTextColor={theme.placeholderTextColor}
                    maxLength={20}
                    onChangeText={text => {
                        setError({ isError: false })
                        if (text !== info.new) {
                            setIsValid({ ...isValid, confirm: false });
                        }
                        else {
                            setIsValid({ ...isValid, confirm: true });
                            setInfo({ ...info, confirm: text })
                        }
                    }}
                />
            </View>
            {!isValid.confirm && <Text style={{ color: 'red' }}>{i18n.t("WrongConfirmPassword")}</Text>}
            {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
            {isLoading === true && <ActivityIndicator size="large" />}
            <TouchableOpacity style={styles.button} onPress={onPressConfirm}>
                <Text style={styles.signUpText}>{i18n.t("ConfirmChange")}</Text>
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
