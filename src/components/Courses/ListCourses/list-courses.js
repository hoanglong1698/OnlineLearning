import React from 'react'
import { View, Text, FlatList, TextInput, Button, SectionList } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'

const ListCourses = (props) => {
    const courses = [
        {
            title: 'Mobile',
            data: [
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
        },

        {
            title: 'Web',
            data: [
                {
                    id: 1,
                    title: 'React',
                    author: 'Hoang Long',
                    level: 'Advance',
                    released: 'May 19, 2020',
                    duration: '40 hours'
                },
        
                {
                    id: 2,
                    title: 'CSharp',
                    author: 'Hoang Long',
                    level: 'Beginner',
                    released: 'May 19, 2020',
                    duration: '30 hours'
                },
        
                {
                    id: 3,
                    title: 'C++',
                    author: 'Hoang Long',
                    level: 'Advance',
                    released: 'May 19, 2020',
                    duration: '40 hours'
                }
        
            ]
        }
    ]

    const searchView = () => {
        return <View style={{flexDirection: 'row', margin: 5}}>
            <TextInput style={{flex: 1, borderColor: 'gray', borderWidth: 1}} placeholder='Search text' />
            <Button onPress={() => {
                console.log('Press search button')
            }} title='Search' style={{width: 60, height: 40}}/>
        </View>
    }

    return (
        <View>
            <FlatList
                data={courses}
                renderItem={({ item }) => <ListCoursesItem item={item} />}
                ListHeaderComponent={() => searchView()}
            />

            {/* <SectionList
                sections={courses}
                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} />}
                renderSectionHeader={({ section: { title } }) =>
                    <View style={{backgroundColor: 'white'}}>
                        <Text>{title}</Text>
                    </View>}
            /> */}
        </View>
    )
}

export default ListCourses