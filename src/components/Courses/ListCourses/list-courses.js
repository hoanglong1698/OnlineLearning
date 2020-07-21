import React, { useContext } from 'react'
import { FlatList, ScrollView } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import { courses } from './../../../globals/database';
import { screenName } from '../../../globals/constants';
import { ThemeContext } from '../../../provider/theme-provider';

const ListCourses = (props) => {
    let data = props.data;
    if (data == null) {
        data = props.route.params.data;
        let title = props.route.params.title;
        props.navigation.setOptions({ title: title });
    }

    const { theme } = useContext(ThemeContext)

    const onPressListItem = (item) => {
        props.navigation.navigate(screenName.coursesDetailScreen, { item })
    }

    return (
        <ScrollView style={{ backgroundColor: theme.mainBackgroundColor }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} onPressListItem={onPressListItem} />}
            />
        </ScrollView>
    )
}
export default ListCourses