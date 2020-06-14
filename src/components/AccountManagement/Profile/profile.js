import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color, screenName } from './../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';

const Profile = ({ navigation }) => {
    const list = [
        {
            title: 'Change password',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },
        {
            title: 'App settings',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },
    ]

    const { authentication } = useContext(AuthenticationContext)

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <TouchableOpacity style={styles.avatarName}>
                    <Image source={require('../../../../assets/gorden-ramsay.jpg')}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{authentication.user.fullname}</Text>
                </TouchableOpacity>

                <Text style={styles.labelOfInput}>Your Name</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Username'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue={authentication.user.fullname}
                    //onChangeText={text => setUsername(text)}
                    />
                </View>

                <Text style={styles.labelOfInput}>Username</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Username'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue={authentication.user.username}
                    //onChangeText={text => setUsername(text)}
                    />
                </View>

                <Text style={styles.labelOfInput}>Email</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder='Username'
                        placeholderTextColor={color.placeholderTextColor}
                        defaultValue='hoanglong16198@gmail.com'
                    //onChangeText={text => setUsername(text)}
                    />
                </View>

                <TouchableOpacity style={styles.changeInfoButton}>
                    <Text style={styles.changeInfoText}>Change Info</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
                <ListItem
                    key={1}
                    title='Change password'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: color.headerText,
                        fontWeight: 'bold',
                    }}
                    onPress={() => navigation.navigate(screenName.changePasswordScreen)}
                />
                <ListItem
                    key={2}
                    title='App settings'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: color.headerText,
                        fontWeight: 'bold',
                    }}
                    onPress={() => navigation.navigate(screenName.settingScreen, {navigation: navigation})}
                />
                <ListItem
                    key={3}
                    title='Logout'
                    bottomDivider
                    chevron
                    titleStyle={{
                        color: 'red',
                        fontWeight: 'bold',
                    }}
                    //onPress={() => navigation.navigate('Setting')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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

    logoutButton: {
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        height: 45,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    logoutText: {
        fontWeight: 'bold',
        color: color.buttonText
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
})


export default Profile
