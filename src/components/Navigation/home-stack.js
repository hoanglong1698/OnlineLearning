import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Main/Home/home';
import CoursesDetail from './../CourseDetail/courses-detail';
import { color, screenName } from './../../globals/constants';
import ListCourses from './../Courses/ListCourses/list-courses';
import { ThemeContext } from '../../provider/theme-provider';

const Stack = createStackNavigator();

const HomeStack = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator initialRouteName="Trang chủ"
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
                name={screenName.homeScreen}
                component={Home}
                options={{
                    title: "Trang chủ",
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
