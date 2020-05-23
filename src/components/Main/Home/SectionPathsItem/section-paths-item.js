import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { color } from '../../../../globals/constants'

const SectionPathsItem = (props) => {
    return (
        <View style={styles.item}>
            <Image source={require('../../../../../assets/icon-course.png')} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.info}>{props.item.quantity}</Text>
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
        marginVertical: 10,
        marginRight: 10,
        width: 200,
        height: 205,
        backgroundColor: color.itemBackgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    image: {
        width: 200,
        height: 100,
    },

    info: {
        fontSize: 14,
        color: color.infoTextColor
    }
})


export default SectionPathsItem
