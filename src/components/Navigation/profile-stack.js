import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../AccountManagement/Profile/profile';
import { color, screenName } from './../../globals/constants';
import ChangePassword from './../AccountManagement/ChangePassword/change-password';
import Setting from './../AccountManagement/Setting/setting';
import ThemeSetting from './../AccountManagement/Setting/theme-setting';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName={screenName.profileScreen}
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.headerBar,
                }
            }}>

            <Stack.Screen
                name={screenName.profileScreen}
                component={Profile}
                options={{
                    title: "Profile",
                }}
            />

            <Stack.Screen
                name={screenName.changePasswordScreen}
                component={ChangePassword}
                options={{
                    title: "Change password",
                }}
            />

            <Stack.Screen
                name={screenName.settingScreen}
                component={Setting}
                options={{
                    title: "Setting",
                }}
            />

            <Stack.Screen
                name={screenName.themeSettingScreen}
                component={ThemeSetting}
                options={{
                    title: "Setting",
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
