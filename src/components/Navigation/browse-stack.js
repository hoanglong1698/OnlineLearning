import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { color, screenName } from './../../globals/constants';
import Browse from './../Main/Browse/browse';
import ListCourses from './../Courses/ListCourses/list-courses';

const Stack = createStackNavigator();

export default function BrowseStack() {
    return (
        <Stack.Navigator
            initialRouteName="Download"
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.headerBar,
                }
            }}
        >
            <Stack.Screen
                name={screenName.browseScreen}
                component={Browse}
                options={{
                    title: "Browse",
                }}
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
