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
import LanguageSetting from './../AccountManagement/Setting/language-setting';
import i18n from './../../../utils/i18n';

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
                    title: i18n.t("Profile"),
                }}
            />

            <Stack.Screen
                name={screenName.changePasswordScreen}
                component={ChangePassword}
                options={{
                    title: i18n.t("ChangePassword"),
                }}
            />

            <Stack.Screen
                name={screenName.settingScreen}
                component={Setting}
                options={{
                    title: i18n.t("Settings"),
                }}
            />

            <Stack.Screen
                name={screenName.themeSettingScreen}
                component={ThemeSetting}
                options={{
                    title: i18n.t("Theme"),
                }}
            />

            <Stack.Screen
                name={screenName.languageSettingScreen}
                component={LanguageSetting}
                options={{
                    title: i18n.t("Language"),
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
                    title: i18n.t("ChangeEmail"),
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
