import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListCourses from './../../Courses/ListCourses/list-courses';
import { color } from './../../../globals/constants';

export default function SearchInstructor(props) {
    const [data, setData] = useState(props.route.params.data.data)
    return (
        <View style={styles.container}>
             <Text style={styles.resultCount}>{data.length} kết quả</Text>
            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    resultCount: {
        fontSize: 14,
        marginVertical: 15,
        marginLeft: 10,
        color: color.headerText, 
    },
})
