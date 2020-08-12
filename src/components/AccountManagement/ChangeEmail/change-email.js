import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios';
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';

export default function ChangeEmail(props) {
    const authContext = useContext(AuthenticationContext);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState({
        isError: false,
        message: ''
    })

    const onPressConfirm = () => {
        if (email === '') {
            setError({ isError: true, message: "Vui lòng nhập email" })
            return;
        }

        if (isValid) {
            props.navigation.push(screenName.loginScreen)
            axios.put('https://api.itedu.me/user/change-user-email', {
                newEmail: email,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    authContext.logout();
                    setTimeout(() => {
                        setIsLoading(false);
                        setStatus("Sửa thông tin thành công");
                        setNameHeader(response.data.payload.name);
                    }, 1000);
                    setTimeout(() => { setStatus('') }, 3000);

                })
                .catch(function (error) {
                    setStatus("Đổi thông tin thất bại");
                });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.notify}>Nếu thay đổi email, tài khoản của bạn sẽ tạm thời đăng xuất sau 5 giây và ngừng hoạt động cho đến khi bạn xác nhận email mới.</Text>
            <Text style={styles.notify}>Các liên kết tài khoản của bạn giữa hệ thống với Facebook và Google cũng sẽ bị hủy bỏ.</Text>
            <Text style={styles.notify}>Thông tin tài khoản khác như khóa học đã thích, lịch sử thanh toán, lịch sử học,... vẫn sẽ được giữ nguyên.</Text>

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Email mới'
                    placeholderTextColor={color.placeholderTextColor}
                    autoCapitalize="none"
                    onChangeText={text => {
                        setError({ isError: false });
                        text = text.trim();
                        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        if (validEmail.test(text)) {
                            setIsValid(true);
                            setEmail(text);
                        }
                        else {
                            setIsValid(false)
                        }
                    }}
                />
            </View>
            {!isValid && <Text style={{ color: 'red' }}>Email không đúng định dạng</Text>}
            {error.isError && <Text style={{ marginTop: 10, textAlign: "center", color: 'red', fontWeight: 'bold' }}>{error.message}</Text>}
            {/* {isLoading === true && <ActivityIndicator size="large" />} */}
            <TouchableOpacity style={styles.button} onPress={onPressConfirm}>
                <Text style={styles.signUpText}>XÁC NHẬN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
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

    button: {
        marginTop: 10,
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

    notify: {
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 5,
    }
})
