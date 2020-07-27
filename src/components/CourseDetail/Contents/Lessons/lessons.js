import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Lessons = (props) => {
    let data = props.item;

    const subMenu = (props) => {
        console.log('3 dot')
    }

    return (
        <ListItem
            title={data.name}
            titleStyle={{ color: color.headerText, }}
            leftElement={<MaterialCommunityIcons
                name='checkbox-blank-circle'
                size={10}
                onPress={subMenu} />}
            rightElement={<Text style={{ fontSize: 12 }}>{data.hours}</Text>}
        />
    )
}

export default Lessons

const styles = StyleSheet.create({})
