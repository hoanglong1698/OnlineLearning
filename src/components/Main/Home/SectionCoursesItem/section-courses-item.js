import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SectionCoursesItem = (props) => {
    return (
        <View style={styles.item}>
            <Image source={require('../../../../../assets/icon-course.png')} style={styles.image} />
            
            <View>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} - ${props.item.released} - ${props.item.duration}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: 'lightgrey'
    },

    image: {
        width: 200,
        height: 100
    },

    darkText: {
        color: 'darkgray'
    }
})


export default SectionCoursesItem
