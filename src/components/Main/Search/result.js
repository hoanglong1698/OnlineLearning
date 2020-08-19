import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchAll from './search-all';
import SearchCourse from './search-course';
import SearchInstructor from './search-instructor';
import { color } from './../../../globals/constants';
import { SearchBar } from 'react-native-elements';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const TopTab = createMaterialTopTabNavigator();
export default function Result(props) {
    console.log(props.route.params.string);
    const [searchString, setSearchString] = useState(props.route.params.string);
    const { theme } = useContext(ThemeContext)
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        axios.post('https://api.itedu.me/course/searchV2', {
            token: authContext.state.token,
            keyword: searchString,
            limit: 20,
            offset: 0
        })
            .then(function (response) {
                console.log(response.data.payload);
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [])

    return (
        <View style={styles.containter}>
            <SearchBar
                placeholder={searchString}
                clearIcon
                platform='default'
                lightTheme={theme.lightSeachBar}
            />

            <TopTab.Navigator
                independent={true}
                initialRouteName="ALL"
                tabBarOptions={{
                    indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                    labelStyle: { fontWeight: 'bold' }
                }}
            >
                <TopTab.Screen name="ALL" component={SearchAll} />
                <TopTab.Screen name="COURSES" component={SearchCourse} />
                <TopTab.Screen name="INSTRUCTORS" component={SearchInstructor} />
            </TopTab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    }
})
