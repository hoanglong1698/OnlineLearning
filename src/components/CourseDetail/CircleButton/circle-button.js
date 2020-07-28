import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color } from './../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CircleButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >
            <View style={styles.icon}>
                <MaterialCommunityIcons name={props.iconName} size={30} color='white' />
            </View>
            <Text style={styles.nameButton}>{props.nameButton}</Text>
        </TouchableOpacity>
    )
}

export default CircleButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.button,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nameButton: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText,
    }
})
