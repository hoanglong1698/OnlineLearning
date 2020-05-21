import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Share } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color } from './../../../globals/constants';

const ListCoursesItem = (props) => {
    const onPressListItem = () => {
        props.navigation.navigate("CoursesDetail", {item: props.item})
    }


    return (
        <TouchableOpacity
            style={styles.item}
            onPress={onPressListItem}
        >
            <Image style={styles.image} source={require('../../../../assets/icon-course.png')} />

            <View style={styles.content}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.info}>{props.item.author}</Text>
                <Text style={styles.info}>{`${props.item.level} \u00B7 ${props.item.released} \u00B7 ${props.item.duration}`}</Text>
                <Rating style={{marginTop: 5}}
                    defaultRating={4}
                    type='star'
                    fractions={1}
                    ratingCount={5}
                    imageSize={12}
                />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'flex-start',
        marginLeft: 10,
        marginTop: 5,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText,
    },

    item: {
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: color.itemBackgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    image: {
        width: 100,
        height: 100
    },

    info: {
        fontSize: 14,
        color: color.infoTextColor
    }
})

export default ListCoursesItem
