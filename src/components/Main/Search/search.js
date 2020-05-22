import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchAll from './SearchAll/search-all';
import SearchPaths from './SearchPaths/search-paths';
import SearchCourses from './SearchCourses/search-courses';
import SearchAuthors from './SearchAuthors/search-authors';
import SearchBarView from './SearchBarView/search-bar-view';

const TopTab = createMaterialTopTabNavigator();

const Search = () => {
    const searchView = () => {
        return <SearchBarView>

        </SearchBarView>
    }

    return (
        <NavigationContainer independent={true} >
            <TopTab.Navigator
                initialRouteName="ALL"
                
            >
                <TopTab.Screen name="ALL" component={SearchAll} />
                <TopTab.Screen name="COURSES" component={SearchCourses} />
                <TopTab.Screen name="PATHS" component={SearchPaths} />
                <TopTab.Screen name="AUTHORS" component={SearchAuthors} />
            </TopTab.Navigator>
        </NavigationContainer>
    )
}

export default Search

const styles = StyleSheet.create({})
