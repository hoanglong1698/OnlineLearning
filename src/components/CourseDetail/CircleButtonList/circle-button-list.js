import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircleButton from '../CircleButton/circle-button'
import { color } from './../../../globals/constants';


const CircleButtonList = (props) => {
    const buttons = [
        {
            id: 1,
            iconName: 'bookmark-outline',
            nameButton: 'Bookmark',
        },

        {
            id: 2,
            iconName: 'access-point-network',
            nameButton: 'Add to Channel',
        },

        {
            id: 3,
            iconName: 'arrow-down-bold-circle-outline',
            nameButton: 'Download',
        }

    ]

    const renderButtonLists = (buttons) => {
        return buttons.map(item => <CircleButton item={item} />)
    }

    return (
        <View style={styles.container}>
            {renderButtonLists(buttons)}
        </View>
    )
}

export default CircleButtonList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    }
})
