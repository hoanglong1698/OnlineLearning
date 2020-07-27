import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Units = (props) => {
    let data = props.item;
    const thumbnail = () => {
        return <View style={styles.icon}>
            <Text style={{ fontWeight: 'bold' }}>{data.section.numberOrder}</Text>
        </View>
    }

    const subMenu = (props) => {
        console.log('3 dot')
    }
    return (
        <ListItem
            title={data.section.title}
            titleStyle={{ color: color.headerText, fontWeight: 'bold' }}
            leftElement={() => thumbnail()}
            subtitle={data.hours}
            rightElement={<MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                onPress={subMenu} />}
        />
    )
}

export default Units

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 40,
        backgroundColor: color.button,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
