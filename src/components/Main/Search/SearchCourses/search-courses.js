import React, { useState } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { bookmarks } from './../../../../globals/database';
import { color } from './../../../../globals/constants';
import ListCourses from '../../../Courses/ListCourses/list-courses';

const SearchCourses = (props) => {
    const [selectedValue, setSelectedValue] = useState("Newest");
    let data = bookmarks;
    return (
        <View style={styles.container}>
            <View style={styles.sort}>
                <Text style={styles.resultCount}>{data.length} result</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    mode={'dropdown'}
                >
                    <Picker.Item label="Relevance" value="rel" />
                    <Picker.Item label="Newest" value="new" />
                </Picker>
            </View>

            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </View>
    )
}

export default SearchCourses

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
    sort: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    picker: {
        height: 20,
        width: 140,
        color: color.headerText,
    }
})
