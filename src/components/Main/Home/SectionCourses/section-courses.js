import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import { render } from 'react-dom'
import { color } from '../../../../globals/constants'

const SectionCourses = (props) => {
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

    const renderListItems = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item} />)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={styles.seeAll}>
                     <Text style={styles.text}>See all ></Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 25,
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
        marginRight: 15,
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


export default SectionCourses