import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './../Main/Search/search';
import Result from './../Main/Search/result';
import { color, screenName } from '../../globals/constants';
import CoursesDetail from './../CourseDetail/courses-detail';

const Stack = createStackNavigator();

export default function SearchStack() {
    return (
        <Stack.Navigator
            initialRouteName={screenName.searchScreen}
            screenOptions={{
                headerStyle: {
                    backgroundColor: color.headerBar,
                }
            }}
        >
            <Stack.Screen
                name={screenName.searchScreen}
                component={Search}
                options={{
                    title: "Search",
                }}
            />

            <Stack.Screen
                name={screenName.resultScreen}
                component={Result}
                options={{
                    title: "Result",
                }}
            />

            <Stack.Screen
                name={screenName.coursesDetailScreen}
                component={CoursesDetail}
            //options={}
            />
        </Stack.Navigator>
    )
}
