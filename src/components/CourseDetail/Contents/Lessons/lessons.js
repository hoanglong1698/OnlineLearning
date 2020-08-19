import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { ThemeContext } from '../../../../provider/theme-provider';

const Lessons = (props) => {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState(props.item);
    const [isPlaying, setIsPlaying] = useState(false);
    const onPressItem = (videoURL, id) => {
        if (!videoURL) {
            return;
        }
        props.callbackToContents(videoURL, id);
        setIsPlaying(true);
    }

    function formatDuration(num) {
        return moment().startOf('day').add(num, 'hours').format('H:mm:ss')
    }

    return (
        <ListItem
            key={data.id}
            title={data.name}
            titleStyle={{ color: theme.headerText, }}
            containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
            leftElement={<Text style={{ fontWeight: 'bold', color: theme.headerText }}>Bài {data.numberOrder}.</Text>}
            rightElement={<Text style={{ fontSize: 12, color: theme.headerText }}>{formatDuration(data.hours)}</Text>}
            badge={isPlaying}
            onPress={() => { onPressItem(data.videoUrl, data.id) }}
        />
    )
}

export default Lessons

const styles = StyleSheet.create({})
