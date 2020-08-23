import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color, screenName } from './../../../globals/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../provider/theme-provider';
import i18n from './../../../../utils/i18n';

const Setting = (props) => {
    const { theme } = useContext(ThemeContext);

    const list = [
        {
            title: i18n.t("Theme"),
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            screenName: screenName.themeSettingScreen,
        },

        {
            title: i18n.t("Language"),
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            screenName: screenName.languageSettingScreen,
            subtitle: i18n.t("LanguageSubtitle")
        },

        {
            title: i18n.t("AppVersion"),
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            subtitle: '1.0.0'
        },
    ]


    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.mainBackgroundColor }}>
            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
                        //leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron={item.chevron}
                        subtitle={item.subtitle}
                        titleStyle={{
                            color: theme.headerText,
                            fontWeight: 'bold',
                        }}
                        subtitleStyle={{
                            color: theme.subtitleColor,
                        }}
                        switch={item.switch}
                        onPress={() => {
                            if (item.screenName) {
                                props.navigation.navigate(item.screenName)
                            }
                        }}
                    />
                ))
            }
        </ScrollView>
    )
}

export default Setting
