import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator, KeyboardAvoidingView, Modal } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const Profile = (props) => {
    const authContext = useContext(AuthenticationContext)
    const [isLoading, setIsLoading] = useState(false);
    const [info, setInfo] = useState({
        name: authContext.state.userInfo.name,
        phone: authContext.state.userInfo.phone
    });
    const [isValid, setIsValid] = useState({
        name: true,
        phone: true,
    });
    const [status, setStatus] = useState('');
    const [nameHeader, setNameHeader] = useState(authContext.state.userInfo.name);
    const [modalVisible, setModalVisible] = useState(false);

    const onPressChangeInfo = () => {
        if (isValid.name && isValid.phone) {
            setIsLoading(true);
            setStatus('');
            axios.put('https://api.itedu.me/user/update-profile', {
                name: info.name,
                phone: info.phone
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    authContext.changeInfo(response.data.payload);
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
        <KeyboardAvoidingView style={styles.container} enabled behavior="height">
            <View style={styles.userInfo}>
                <TouchableOpacity style={styles.avatarName}>
                    <Image source={{ uri: authContext.state.userInfo.avatar }}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{nameHeader}</Text>
                </TouchableOpacity>

                <Text style={styles.labelOfInput}>Họ tên</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Họ tên'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue={authContext.state.userInfo.name}
                        autoCapitalize="words"
                        onChangeText={text => {
                            let invalidName = /[!@#$%^&*(),.?":{}|<>\d+$]/;
                            if (!invalidName.test(text)) {
                                setIsValid({ ...isValid, name: true })
                            }
                            else {
                                setIsValid({ ...isValid, name: false })
                            }
                            setInfo({ ...info, name: text })
                        }}
                    />
                </View>
                {!isValid.name && <Text style={{ color: 'red' }}>Tên tối thiểu 2 ký tự và không chứa ký tự đặc biệt</Text>}

                <Text style={styles.labelOfInput}>Email</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Email'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue={authContext.state.userInfo.email}
                        editable={false}
                    />
                </View>

                <Text style={styles.labelOfInput}>Điện thoại</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Điện thoại'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue={authContext.state.userInfo.phone}
                        keyboardType="numeric"
                        onChangeText={text => {
                            let validPhone = /^\d+$/;
                            if (validPhone.test(text)) {
                                setIsValid({ ...isValid, phone: true })
                            }
                            else {
                                setIsValid({ ...isValid, phone: false })
                            }
                            setInfo({ ...info, phone: text })
                        }}
                    />
                </View>
                {!isValid.phone && <Text style={{ color: 'red', marginBottom: 5 }}>Số điện thoại sai</Text>}

                {isLoading === true && <ActivityIndicator size="small" />}
                <Text style={{ color: color.headerText }}>{status}</Text>
                <TouchableOpacity style={styles.changeInfoButton} onPress={onPressChangeInfo}>
                    <Text style={styles.changeInfoText}>Sửa thông tin</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
                <ListItem
                    key={1}
                    title='Đổi mật khẩu'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: color.headerText,
                        fontWeight: 'bold',
                    }}
                    onPress={() => props.navigation.navigate(screenName.changePasswordScreen)}
                />
                <ListItem
                    key={2}
                    title='Đổi địa chỉ email'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: color.headerText,
                        fontWeight: 'bold',
                    }}
                    onPress={() => props.navigation.navigate(screenName.changeEmailScreen)}
                />
                <ListItem
                    key={3}
                    title='Cài đặt'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: color.headerText,
                        fontWeight: 'bold',
                    }}
                    onPress={() => props.navigation.navigate(screenName.settingScreen)}
                />
                <ListItem
                    key={4}
                    title='Đăng xuất'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: 'red',
                        fontWeight: 'bold',
                    }}
                    onPress={() => { setModalVisible(!modalVisible) }}
                />
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Xác nhận?</Text>

                    <TouchableOpacity
                        style={{ ...styles.changeInfoButton, backgroundColor: 'red', marginBottom: 20 }}
                        onPress={() => { authContext.logout(); setModalVisible(!modalVisible); props.navigation.push(screenName.loginScreen) }}>
                        <Text style={styles.changeInfoText}>Đăng xuất</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ ...styles.changeInfoButton, backgroundColor: color.infoTextColor, borderColor: color.infoTextColor }} onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={styles.changeInfoText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
    },

    userInfo: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },

    avatarName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'flex-start'
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    name: {
        marginLeft: 15,
        color: color.headerText,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    labelOfInput: {
        color: color.headerText,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: -10,
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

    changeInfoButton: {
        marginVertical: 0,
        alignSelf: 'stretch',
        backgroundColor: color.button,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
    },

    changeInfoText: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
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
    }
})


export default Profile
