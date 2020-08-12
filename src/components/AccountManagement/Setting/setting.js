import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color, screenName } from './../../../globals/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../provider/theme-provider';

const Setting = (props) => {
    const { theme } = useContext(ThemeContext);

    const list = [
        {
            title: 'Chủ đề',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            screenName: screenName.themeSettingScreen,
        },

        {
            title: 'Ngôn ngữ',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            subtitle: 'Được chọn theo hệ thống',
        },

        {
            title: 'Phiên bản ứng dụng',
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
        <ScrollView>
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
                        onPress={() => props.navigation.navigate(item.screenName)}
                    />
                ))
            }
        </ScrollView>
    )
}

export default Setting
