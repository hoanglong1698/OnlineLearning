import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { color } from './../../../globals/constants';
import ListCourses from '../../Courses/ListCourses/list-courses';
import { download } from './../../../globals/database';

const Download = (props) => {
    let data = download;
    const RemoveAll = () => {
        data.splice(0, data.length);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{data.length} Courses (150 MB)</Text>
                <TouchableOpacity
                    style={styles.seeAll}
                    onPress={RemoveAll}
                >
                    <Text style={styles.text}>REMOVE ALL</Text>
                </TouchableOpacity>
            </View>

            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </View>
    )
}

export default Download

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginHorizontal: 10,
        marginVertical: 25,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText
    },

    seeAll: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 0,
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 100,
    },

    text: {
        fontSize: 14,
        color: color.seeAllTextColor,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
