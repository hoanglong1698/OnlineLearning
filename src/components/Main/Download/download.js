import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ListCoursesItem from './../../Courses/ListCoursesItem/list-courses-item';
import { color } from './../../../globals/constants';

const Download = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40h'
        },

        {
            id: 2,
            title: 'iOS',
            author: 'Hoang Long',
            level: 'Beginner',
            released: 'May 19, 2020',
            duration: '30h'
        },

        {
            id: 3,
            title: 'Android',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40h'
        }

    ]

    const headerDownload = () => {
        return <View style={styles.header}>
            <Text style={styles.title}>2 Courses (0 MB)</Text>
            <TouchableOpacity style={styles.seeAll}>
                <Text style={styles.text}>REMOVE ALL</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <FlatList
            data={courses}
            renderItem={({ item }) => <ListCoursesItem item={item} />}
            ListHeaderComponent={() => headerDownload()}
        />
    )
}

export default Download

const styles = StyleSheet.create({
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
