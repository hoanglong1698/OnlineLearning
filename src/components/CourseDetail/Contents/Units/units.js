import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../../provider/theme-provider';
import i18n from './../../../../../utils/i18n';

const Units = (props) => {
    const { theme } = useContext(ThemeContext);
    let data = props.item;
    const thumbnail = () => {
        return <View style={styles.icon}>
            <Text style={{ fontWeight: 'bold', color: theme.headerText }}>{i18n.t("Unit")} {data.section.numberOrder}</Text>
        </View>
    }

    const subMenu = (props) => {
        console.log('3 dot')
    }
    return (
        <ListItem
            title={data.section.title}
            titleStyle={{ color: theme.headerText, fontWeight: 'bold' }}
            containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
            leftElement={() => thumbnail()}
            subtitle={data.hours}
            rightElement={<MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                onPress={subMenu}
                style={{ color: theme.headerText }} />}
        />
    )
}

export default Units

const styles = StyleSheet.create({
    icon: {
        width: 60,
        height: 40,
        backgroundColor: color.button,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
