import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import SearchSectionCourses from './SearchSectionCourses/search-section-courses'
import SearchSectionPaths from './SearchSectionPaths/search-section-paths'

const SearchAll = (props) => {
    return (
        <ScrollView>
            <SearchSectionCourses navigation={props.navigation}></SearchSectionCourses>
            <SearchSectionPaths navigation={props.navigation}></SearchSectionPaths>
        </ScrollView>
    )
}

export default SearchAll

const styles = StyleSheet.create({})
