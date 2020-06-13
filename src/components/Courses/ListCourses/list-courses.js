import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import { courses } from './../../../globals/database';

const ListCourses = (props) => {
    let data = props.data;
    if (data == null) {
        data = props.route.params.data;
        let title = props.route.params.title;
        console.log(title);
        props.navigation.setOptions({ title: title });
    }

    const onPressListItem = (item) => {
        props.navigation.navigate(screenName.coursesDetailScreen, { item })
    }

    return (
        <ScrollView>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} onPressListItem={onPressListItem} />}
            />
        </ScrollView>
    )
}
export default ListCourses