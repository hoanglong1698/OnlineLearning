import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './../Main/Search/search';
import Result from './../Main/Search/result';
import { color, screenName } from '../../globals/constants';
import CoursesDetail from './../CourseDetail/courses-detail';
import { ThemeContext } from '../../provider/theme-provider';
import i18n from './../../../utils/i18n';
import AuthorDetail from './../Authors/AuthorDetail/author-detail';

const Stack = createStackNavigator();

export default function SearchStack() {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator
            initialRouteName={screenName.searchScreen}
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
                name={screenName.searchScreen}
                component={Search}
                options={{
                    title: i18n.t("Search"),
                }}
            />

            <Stack.Screen
                name={screenName.resultScreen}
                component={Result}
                options={{
                    title: i18n.t("ResultMain"),
                }}
            />

            <Stack.Screen
                name={screenName.coursesDetailScreen}
                component={CoursesDetail}
            //options={}
            />

            <Stack.Screen
                name={screenName.authorDetailScreen}
                component={AuthorDetail}
            />
        </Stack.Navigator>
    )
}
