import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color } from '../../../../globals/constants'

const SectionCoursesItem = (props) => {
    return (
        <View style={styles.item}>
            <Image source={require('../../../../../assets/icon-course.png')} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.info}>{props.item.author}</Text>
                <Text style={styles.info}>{`${props.item.level} - ${props.item.released} - ${props.item.duration}`}</Text>
                <Rating style={{marginTop: 5}}
                    defaultRating={4}
                    type='star'
                    fractions={1}
                    ratingCount={5}
                    imageSize={12}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText,
    },

    content: {
        marginVertical: 10,
        marginLeft: 10,
        alignItems: 'flex-start',
    },

    item: {
        marginTop: 10,
        marginRight: 10,
        width: 200,
        height: 205,
        backgroundColor: color.itemBackgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
    },

    image: {
        width: 200,
        height: 100,
        borderRadius: 5,
    },

    info: {
        fontSize: 14,
        color: color.infoTextColor
    }
})


export default SectionCoursesItem
