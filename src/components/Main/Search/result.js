import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchAll from './SearchAll/search-all';
import SearchPaths from './SearchPaths/search-paths';
import SearchCourses from './SearchCourses/search-courses';
import SearchAuthors from './SearchAuthors/search-authors';
import SearchBarView from './SearchBarView/search-bar-view';
import { color } from './../../../globals/constants';

const TopTab = createMaterialTopTabNavigator();

const Result = (props) => {
    const searchView = () => {
        return <SearchBarView>

        </SearchBarView>
    }

    return (
        <View style={styles.containter}>
            <SearchBarView />

            <TopTab.Navigator
                independent={true}
                initialRouteName="ALL"
                tabBarOptions={{
                    indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                    labelStyle: {fontWeight: 'bold'}
                }}
            >
                <TopTab.Screen name="ALL" component={SearchAll} />
                <TopTab.Screen name="COURSES" component={SearchCourses} />
                <TopTab.Screen name="PATHS" component={SearchPaths} />
                <TopTab.Screen name="AUTHORS" component={SearchAuthors} />
            </TopTab.Navigator>
        </View>


    )
}

export default Result

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    }
})
