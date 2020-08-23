import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ThemeContext } from '../../../provider/theme-provider'
import { changeLaguage } from '../../../../utils/i18n'

export default function LanguageSetting(props) {
    props.navigation.setOptions({ title: 'Ngôn ngữ' })
    const { theme } = useContext(ThemeContext);
    const [isCheckVie, setIsCheckVie] = useState(true);
    const [isCheckEng, setIsCheckEng] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: theme.mainBackgroundColor }}>
            <ListItem
                key={1}
                title='Tiếng Việt'
                containerStyle={{ backgroundColor: theme.itemBackgroundColor }}

                bottomDivider
                checkmark={isCheckVie}
                titleStyle={{
                    color: theme.headerText,
                    fontWeight: 'bold',
                }}
                onPress={() => {
                    setIsCheckVie(true);
                    setIsCheckEng(false);
                    changeLaguage("vi");
                }}
            />
            <ListItem
                key={2}
                title='Tiếng Anh'
                containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
                checkmark={isCheckEng}
                titleStyle={{
                    color: theme.headerText,
                    fontWeight: 'bold',
                }}
                onPress={() => {
                    setIsCheckVie(false);
                    setIsCheckEng(true);
                    changeLaguage("en");
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({})
