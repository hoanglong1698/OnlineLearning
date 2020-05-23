import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Units = (props) => {
    const thumbnail = (props) => {
        return <View style={styles.icon}>
            <Text>1</Text>
        </View>
    }

    const subMenu = (props) => {
        console.log('3 dot')
    }
    return (
        <ListItem
            title='Courses Overview'
            titleStyle={{ color: color.headerText, }}
            leftElement={() => thumbnail()}
            subtitle='1:35'
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
