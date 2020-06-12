import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListCourses from './../Courses/ListCourses/list-courses';
import { color, screenName } from './../../globals/constants';
import Download from './../Main/Download/download';
import CoursesDetail from './../CourseDetail/courses-detail';

const Stack = createStackNavigator();

const DownloadStack = () => {
    return (
        <Stack.Navigator initialRouteName="Download"
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.headerBar,
                }
            }}>

            <Stack.Screen
                name={screenName.downloadScreen}
                component={Download}
                options={{
                    title: "Download",
                }}
            />

            <Stack.Screen
                name={screenName.listCoursesScreen}
                component={ListCourses}
                options={
                    ({ route }) => ({ title: route.params.title })
                }
            />

            <Stack.Screen
                name={screenName.coursesDetailScreen}
                component={CoursesDetail}
                options={{
                    title: "Courses Detail",
                }}
            />
        </Stack.Navigator>
    )
}

export default DownloadStack