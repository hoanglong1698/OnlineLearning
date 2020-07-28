import React, { useContext } from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native'
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

    if (!data.length) {
        return (
            <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
                <Image source={require('../../../../assets/empty.png')}
                    style={styles.empty}
                />
                <Text style={{ ...styles.text, color: theme.headerText }}>Không có dữ liệu</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.mainBackgroundColor }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
            />
        </View>
    )
}
export default ListCourses

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    empty: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        marginTop: 10,
    }
})
