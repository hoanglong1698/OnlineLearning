import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { color } from './../../../globals/constants';

const Author = (props) => {
    return (
        <TouchableOpacity style={styles.avatarName}>
            <Image source={{ uri: props.avatarURL }}
                style={styles.avatar}
            />
            <Text style={styles.name}>{props.title}</Text>


        </TouchableOpacity>
    )
}

export default Author

const styles = StyleSheet.create({
    avatarName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },

    name: {
        marginLeft: 15,
        color: color.headerText,
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'center'
    },
})
