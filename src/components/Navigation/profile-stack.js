import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './../AccountManagement/Profile/profile';
import { color } from './../../globals/constants';
import ChangePassword from './../AccountManagement/ChangePassword/change-password';
import Setting from './../AccountManagement/Setting/setting';

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="Profile"
            screenOptions={{
                headerStyle: {
                backgroundColor: color.headerBar,
            }
        }}>

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Profile",
                }}
            />

            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{
                    title: "Change password",
                }}
            />

            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{
                    title: "Setting",
                }}
            />
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
