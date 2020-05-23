import React from 'react'
import { View, Text, FlatList, TextInput, Button, SectionList, ScrollView } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import SearchBarView from './../../Main/Search/SearchBarView/search-bar-view';
import { courses } from './../../../globals/database';

const ListCourses = (props) => {
    return (
        <ScrollView>
            <FlatList
                data={courses}
                renderItem={({ item }) => <ListCoursesItem item={item} />}
            />
        </ScrollView>
    )
}
export default ListCourses