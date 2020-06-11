import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import { color, screenName } from '../../../../globals/constants'
import { createStackNavigator } from '@react-navigation/stack';
import { courses, continueLearning } from './../../../../globals/database';

const Stack = createStackNavigator();

const SectionCourses = (props) => {
    let data = props.data || [];
    const renderListItems = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />)
    }
    
    const onPressSeeAll = () => {
        props.navigation.navigate(screenName.listCoursesScreen, {title: props.title})
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={styles.seeAll} onPress={onPressSeeAll}>
                    <Text style={styles.text}>See all ></Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(data)}
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