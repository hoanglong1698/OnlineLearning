import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import ListCourses from './../../../../Courses/ListCourses/list-courses';
import { color } from './../../../../../globals/constants';
import { courses } from './../../../../../globals/database';

const SearchSectionCourses = (props) => {
    let data = courses;
    return (
        <ScrollView style={{marginBottom: 10}}>
            <View style={styles.sectionHeader}>
                <Text style={styles.title}>Courses</Text>
                <TouchableOpacity style={styles.seeAll}>
                    <Text style={styles.text}>8 result {">"}</Text>
                </TouchableOpacity>
            </View>
            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </ScrollView>
    )
}

export default SearchSectionCourses

const styles = StyleSheet.create({
    sectionHeader: {
        marginHorizontal: 10,
        marginVertical: 15,
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
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 60,
    },

    text: {
        fontSize: 12,
        color: color.seeAllTextColor,
        textAlign: 'center',
    }
})
