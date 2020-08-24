import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../Main/Home/home';
import CoursesDetail from './../CourseDetail/courses-detail';
import { color, screenName } from './../../globals/constants';
import ListCourses from './../Courses/ListCourses/list-courses';
import { ThemeContext } from '../../provider/theme-provider';
import i18n from './../../../utils/i18n';
import ListAuthors from './../Authors/ListAuthors/list-authors';
import AuthorDetail from './../Authors/AuthorDetail/author-detail';

const Stack = createStackNavigator();

const HomeStack = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator initialRouteName={i18n.t("Home")}
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
                    title: i18n.t("Home"),
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

            <Stack.Screen
                name={screenName.listAuthorsScreen}
                component={ListAuthors}
                options={{
                    title: i18n.t("Instructor"),
                }}
            />

            <Stack.Screen
                name={screenName.authorDetailScreen}
                component={AuthorDetail}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
