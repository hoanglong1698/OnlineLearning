import React, { useContext } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
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

    if (!data.length) {
        return (
            <View style={{ backgroundColor: theme.mainBackgroundColor }}>
                <Text>Không có dữ liệu</Text>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: theme.mainBackgroundColor }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} onPressListItem={onPressListItem} />}
            />
        </View>
    )
}
export default ListCourses

const styles = StyleSheet.create({
    
})
