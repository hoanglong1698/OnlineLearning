import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../AccountManagement/Profile/profile';
import { color, screenName } from './../../globals/constants';
import ChangePassword from './../AccountManagement/ChangePassword/change-password';
import Setting from './../AccountManagement/Setting/setting';
import ThemeSetting from './../AccountManagement/Setting/theme-setting';
import { ThemeContext } from '../../provider/theme-provider';
import ChangePasswordSuccessfully from './../AccountManagement/ChangePassword/change-password-successfully';
import ChangeEmail from './../AccountManagement/ChangeEmail/change-email';

const Stack = createStackNavigator();

const ProfileStack = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator initialRouteName={screenName.profileScreen}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.headerBar,
                },
                headerTintColor: theme.headerText,
                headerTitleStyle: {
                    color: theme.headerText,
                },
            }}>

            <Stack.Screen
                name={screenName.profileScreen}
                component={Profile}
                options={{
                    title: "Quản lý tài khoản",
                }}
            />

            <Stack.Screen
                name={screenName.changePasswordScreen}
                component={ChangePassword}
                options={{
                    title: "Đổi mật khẩu",
                }}
            />

            <Stack.Screen
                name={screenName.settingScreen}
                component={Setting}
                options={{
                    title: "Cài đặt",
                }}
            />

            <Stack.Screen
                name={screenName.themeSettingScreen}
                component={ThemeSetting}
                options={{
                    title: "Setting",
                }}
            />

            <Stack.Screen
                name={screenName.changePasswordSuccessfully}
                component={ChangePasswordSuccessfully}
                options={{
                    title: "Đổi mật khẩu thành công",
                }}
            />
            <Stack.Screen
                name={screenName.changeEmailScreen}
                component={ChangeEmail}
                options={{
                    title: "Đổi địa chỉ email",
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
