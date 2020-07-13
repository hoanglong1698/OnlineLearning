import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ThemeContext } from '../../../provider/theme-provider';
import { themeService } from './../../../core/services/theme-services';

export default function ThemeSetting(props) {
    props.navigation.setOptions({ title: 'Theme' })
    const [isCheckLight, setIsCheckLight] = useState(true);
    const [isCheckDark, setIsCheckDark] = useState(false);

    return <ThemeContext.Consumer>
        {
            ({ theme, setTheme }) => {
                return (
                    <View style={{ flex: 1, backgroundColor: theme.mainBackgroundColor }}>
                        <ListItem
                            key={1}
                            title='Light'
                            containerStyle={{backgroundColor: theme.itemBackgroundColor}}
                            
                            bottomDivider
                            checkmark={isCheckLight}
                            titleStyle={{
                                color: theme.headerText,
                                fontWeight: 'bold',
                            }}
                            onPress={() => {
                                setIsCheckLight(true);
                                setIsCheckDark(false);
                                setTheme(themeService("Light"));
                                console.log('light theme');
                            }}
                        />
                        <ListItem
                            key={2}
                            title='Dark'
                            containerStyle={{backgroundColor: theme.itemBackgroundColor}}
                            checkmark={isCheckDark}
                            titleStyle={{
                                color: theme.headerText,
                                fontWeight: 'bold',
                            }}
                            onPress={() => {
                                setIsCheckLight(false);
                                setIsCheckDark(true);
                                setTheme(themeService("Dark"));
                                console.log('dark theme');
                            }}
                        />
                    </View>
                )
            }
        }
    </ThemeContext.Consumer>

}
