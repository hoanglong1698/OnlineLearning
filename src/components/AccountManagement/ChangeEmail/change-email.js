import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import axios from 'axios';
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { ThemeContext } from '../../../provider/theme-provider';
import i18n from './../../../../utils/i18n';

export default function ChangeEmail(props) {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [status, setStatus] = useState({
        isShow: false,
        isError: false,
        message: ''
    })
    const [modalVisible, setModalVisible] = useState(false);

    const onPressConfirm = () => {
        setModalVisible(!modalVisible);
        setIsLoading(true);
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
                    setStatus({ isShow: true, isError: false, message: 'Đổi email thành công, ứng dụng sẽ tự động chuyển sang màn hình đăng nhập trong 5 giây' })
                }, 1000);
                setTimeout(() => {
                    props.navigation.push(screenName.loginScreen);
                }, 5000);

            })
            .catch(function (error) {
                setTimeout(() => {
                    setIsLoading(false);
                    setStatus({ isShow: true, isError: true, message: error.response.data.message })
                }, 1000);
            });
    }

    const onPressChangeEmail = () => {
        setStatus({ isShow: false })
        if (email === '') {
            return;
        }

        if (isValid) {
            setModalVisible(true)
        }
    }
    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <Text style={styles.notify}>Nếu thay đổi email, tài khoản của bạn sẽ tạm thời đăng xuất sau 5 giây và ngừng hoạt động cho đến khi bạn xác nhận email mới.</Text>
            <Text style={styles.notify}>Các liên kết tài khoản của bạn giữa hệ thống với Facebook và Google cũng sẽ bị hủy bỏ.</Text>
            <Text style={styles.notify}>Thông tin tài khoản khác như khóa học đã thích, lịch sử thanh toán, lịch sử học,... vẫn sẽ được giữ nguyên.</Text>

            <View style={styles.inputView} >
                <TextInput
                    style={{ ...styles.inputText, color: theme.headerText }}
                    placeholder={i18n.t("NewEmail")}
                    placeholderTextColor={color.placeholderTextColor}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={text => {
                        setStatus({ isShow: false });
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
            {isLoading === true && <ActivityIndicator size="small" />}
            {status.isShow && <Text style={(status.isError === true) ? styles.error : styles.status}>{status.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={onPressChangeEmail}>
                <Text style={styles.signUpText}>{i18n.t("ChangeEmail")}</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Xác nhận đổi email?</Text>

                    <TouchableOpacity
                        style={{ ...styles.button, backgroundColor: 'red', marginBottom: 20 }}
                        onPress={onPressConfirm}>
                        <Text style={styles.signUpText}>Xác nhận</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ ...styles.button, backgroundColor: color.infoTextColor, borderColor: color.infoTextColor }}
                        onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={styles.signUpText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View >
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
    },

    modalView: {
        marginHorizontal: 50,
        marginTop: 300,
        padding: 40,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'red',
    },

    status: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    error: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
