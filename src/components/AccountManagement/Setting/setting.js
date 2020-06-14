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
            title: 'Account',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },
        {
            title: 'Subscription',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            subtitle: 'Free',
        },
        {
            title: 'Communication Preferences',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },
        {
            title: 'Default caption language',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            subtitle: 'English'
        },
        {
            title: 'Theme',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            screenName: screenName.themeSettingScreen,
        },
        {
            title: 'Require Wi-Fi for streaming',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            switch: 'false',
        },

        {
            title: 'Require Wi-Fi for downloading',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            switch: 'false',
        },

        {
            title: 'Recommended content push notifications',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            switch: 'false',
            subtitle: 'Receive notifications about recommended content'
        },

        {
            title: 'Show quiz at the end of video',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            switch: 'true',
        },

        {
            title: 'Download location',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
            subtitle: 'Default location (32 GB free of 64 GB)',
        },

        {
            title: 'Captions',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },

        {
            title: 'Notifications',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },

        {
            title: 'Advance settings',
            titleStyle: [
                {
                    color: color.headerText,
                    fontWeight: 'bold',
                }
            ],
        },

        {
            title: 'App version',
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
