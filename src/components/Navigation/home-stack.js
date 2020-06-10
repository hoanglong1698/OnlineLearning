import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Main/Home/home';
import CoursesDetail from './../CourseDetail/courses-detail';
import { color, screenName } from './../../globals/constants';
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
                name={screenName.homeScreen}
                component={Home}
                options={{
                    title: "Home",
                }}
            />

            <Stack.Screen
                name={screenName.coursesDetailScreen}
                component={CoursesDetail}
                //options={}
            />

            <Stack.Screen
                name={screenName.listCoursesScreen}
                component={ListCourses}
                options={
                    ({ route }) => ({ title: route.params.title })
                }
            />
        </Stack.Navigator>
    )
}

export default HomeStack
