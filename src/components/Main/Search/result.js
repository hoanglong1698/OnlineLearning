import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchAll from './search-all';
import SearchCourse from './search-course';
import SearchInstructor from './search-instructor';
import { color } from './../../../globals/constants';
import { SearchBar } from 'react-native-elements';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';
import i18n from './../../../../utils/i18n';

const TopTab = createMaterialTopTabNavigator();
export default function Result(props) {
    const [searchString, setSearchString] = useState(props.route.params.string);
    const { theme } = useContext(ThemeContext)
    const authContext = useContext(AuthenticationContext);

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        axios.post('https://api.itedu.me/course/searchV2', {
            token: authContext.state.token,
            keyword: searchString,
            limit: 20,
            offset: 0
        })
            .then(function (response) {
                setData(response.data.payload);
                setIsLoaded(true);
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                setIsLoading(false);
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

            {isLoading === true && <ActivityIndicator size="large" />}

            {isLoaded === true &&
                <TopTab.Navigator
                    independent={true}
                    initialRouteName={i18n.t("AllTab")}
                    tabBarOptions={{
                        indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                        labelStyle: { fontWeight: 'bold' }
                    }}
                >
                    <TopTab.Screen name={i18n.t("AllTab")} component={SearchAll} initialParams={{ data: data }} />
                    <TopTab.Screen name={i18n.t("CoursesTab")} component={SearchCourse} initialParams={{ data: data.courses }} />
                    <TopTab.Screen name={i18n.t("InstructorsTab")} component={SearchInstructor} initialParams={{ data: data.instructors }} />
                </TopTab.Navigator>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
})
