import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Main/Home/home';
import CoursesDetail from './../CourseDetail/courses-detail';
import { color } from './../../globals/constants';
import ListCourses from './../Courses/ListCourses/list-courses';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.headerBar,
                }
            }}>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                }}
            />

            <Stack.Screen
                name="CoursesDetail"
                component={CoursesDetail}
                options={{
                    title: "Courses Detail",
                }}
            />

            <Stack.Screen
                name="ListCourses"
                component={ListCourses}
                options={
                    ({ route }) => ({ title: route.params.title })
                }
            />
        </Stack.Navigator>
    )
}

export default HomeStack
