import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from './../../../../globals/constants';
import { ThemeContext } from '../../../../provider/theme-provider';

const SectionAuthorsItem = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri: props.item["user.avatar"]}}
                style={styles.avatar}
            />
            <Text style={{ ...styles.text, color: theme.headerText }}>{props.item["user.name"]}</Text>
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
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    text: {
        color: color.headerText,
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center'
    }
})


export default SectionAuthorsItem
