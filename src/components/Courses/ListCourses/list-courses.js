import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import { courses } from './../../../globals/database';

const ListCourses = (props) => {
    console.log(props);
    return (
        <ScrollView>
            <FlatList
                data={courses}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
            />
        </ScrollView>
    )
}
export default ListCourses