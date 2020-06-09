import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../globals/constants';
import InputView from '../../Common/input-view'
import PasswordView from '../../Common/password-view'
import LogoutButton from '../../Common/log-out-button';

const Profile = ({navigation}) => {
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

    const onPressTest = () =>
        console.log('clicked')

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <TouchableOpacity style={styles.avtarName}>
                    <Image source={require('../../../../assets/gorden-ramsay.jpg')}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>Hoang Long Nguyen</Text>
                </TouchableOpacity>

                <Text style={styles.nameOfInput}>Your Name</Text>
                <InputView title="Hoang Long Nguyen"></InputView>

                <Text style={styles.nameOfInput}>Username</Text>
                <InputView title="hoanglong1698"></InputView>

                <Text style={styles.nameOfInput}>Email</Text>
                <InputView title="hoanglong16198@gmail.com"></InputView>

                <LogoutButton title="Log out"></LogoutButton>
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
                    onPress={() => navigation.navigate('ChangePassword')}
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
                    onPress={() => navigation.navigate('Setting')}
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

    avtarName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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

    nameOfInput: {
        color: color.headerText,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: -10,
    }
})


export default Profile
