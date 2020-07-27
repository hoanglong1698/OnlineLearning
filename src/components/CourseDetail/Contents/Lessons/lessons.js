import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
const Lessons = (props) => {
    let data = props.item;

    const onPressItem = (videoURL, id) => {
        props.callbackToContents(videoURL);
    }

    function formatDuration(num) {
        return moment().startOf('day').add(num, 'hours').format('H:mm:ss')
    }

    return (
        <ListItem
            key={data.id}
            title={data.name}
            titleStyle={{ color: color.headerText, }}
            leftElement={<MaterialCommunityIcons
                name='checkbox-blank-circle'
                size={10}
            />}
            rightElement={<Text style={{ fontSize: 12 }}>{formatDuration(data.hours)}</Text>}

            onPress={() => { onPressItem(data.videoUrl, data.id) }}
        />
    )
}

export default Lessons

const styles = StyleSheet.create({})
