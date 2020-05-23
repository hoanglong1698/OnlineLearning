import React from 'react'
import { View, Text, FlatList, TextInput, Button, SectionList, ScrollView } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import SearchBarView from './../../Main/Search/SearchBarView/search-bar-view';

const ListCourses = (props) => {
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
        },

        {
            id: 4,
            title: 'C#',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40 hours'
        },

        {
            id: 5,
            title: 'Blockchain',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40 hours'
        },

        {
            id: 6,
            title: 'AWS',
            author: 'Hoang Long',
            level: 'Advance',
            released: 'May 19, 2020',
            duration: '40 hours'
        },
    ]

    const searchView = () => {
        return <SearchBarView>

        </SearchBarView>
    }

    return (
        <ScrollView>
            <FlatList
                data={courses}
                renderItem={({ item }) => <ListCoursesItem item={item} />}
                //ListHeaderComponent={() => searchView()}
            />

            {/* <SectionList
                sections={courses}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                renderSectionHeader={({ section: { title } }) =>
                    <View style={{backgroundColor: 'white'}}>
                        <Text>{title}</Text>
                    </View>}
            /> */}
        </ScrollView>
    )
}
export default ListCourses