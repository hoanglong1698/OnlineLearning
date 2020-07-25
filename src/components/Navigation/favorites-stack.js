import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListCourses from '../Courses/ListCourses/list-courses';
import { color, screenName } from '../../globals/constants';
import Favorites from '../Main/Favorites/favorites';
import CoursesDetail from '../CourseDetail/courses-detail';
import { ThemeContext } from '../../provider/theme-provider';

const Stack = createStackNavigator();

const FavoritesStack = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator initialRouteName="Favorites"
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
                name={screenName.downloadScreen}
                component={Favorites}
                options={{
                    title: "Favorites",
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

export default FavoritesStack