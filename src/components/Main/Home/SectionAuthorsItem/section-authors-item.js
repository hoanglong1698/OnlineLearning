import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from './../../../../globals/constants';

const SectionAuthorsItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={require('../../../../../assets/gorden-ramsay.jpg')}
                style={styles.avatar}
            />
            <Text style={styles.text}>{props.item.author}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
        marginRight: 20,
        width: 80,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    text: {
        color: color.headerText,
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center'
    }
})


export default SectionAuthorsItem
