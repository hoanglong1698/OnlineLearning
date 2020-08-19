import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { color, screenName } from './../../globals/constants';
import Browse from './../Main/Browse/browse';
import ListCourses from './../Courses/ListCourses/list-courses';
import CoursesDetail from './../CourseDetail/courses-detail';
import { ThemeContext } from '../../provider/theme-provider';

const Stack = createStackNavigator();

export default function BrowseStack() {
    const { theme } = useContext(ThemeContext);

    return (
        <Stack.Navigator
            initialRouteName={screenName.browseScreen}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.headerBar,
                },
                headerTintColor: theme.headerText,
                headerTitleStyle: {
                    color: theme.headerText,
                },
            }}
        >
            <Stack.Screen
                name={screenName.browseScreen}
                component={Browse}
                options={{
                    title: "Khám phá",
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
            //options={}
            />
        </Stack.Navigator>
    )
}
