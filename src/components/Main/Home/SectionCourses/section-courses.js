import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import { render } from 'react-dom'

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40 hours'
        },

        {
            id: 2,
            title: 'iOS',
            author: 'Hoang Long',
            level: 'Beginner',
            released: 'May 19, 2020',
            duration: '30 hours'
        },

        {
            id: 3,
            title: 'Android',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40 hours'
        }

    ]

    const renderListItems = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item} />)
    }

    return (
        <View>
            <View>
                <Text>{props.title}</Text>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(courses)}
            </ScrollView>
        </View>
    )
}

export default SectionCourses