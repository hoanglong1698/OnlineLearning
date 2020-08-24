import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { ThemeContext } from '../../../provider/theme-provider'
import { color, screenName } from './../../../globals/constants';

export default function ListAuthorItem(props) {
    const { theme } = useContext(ThemeContext)

    const thumbnail = (imageURL) => {
        return <View style={styles.thumbnail}>
            <Image style={styles.thumbnail}
                source={{ uri: imageURL }}>
            </Image>
        </View>
    }

    return (
        <ListItem
            title={props.item["user.name"]}
            titleStyle={{ color: theme.headerText, fontWeight: 'bold' }}
            containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
            leftElement={() => thumbnail(props.item["user.avatar"])}
            subtitle={() =>
                <View>
                    <Text style={styles.subtitle}>{props.item.major}</Text>
                    <Text style={styles.subtitle}>{props.item.skills.map((item) => item + ` \u00B7 `)}</Text>
                </View>
            }
            bottomDivider
            onPress={() => {
                props.navigation.navigate(screenName.authorDetailScreen, { id: props.item.id, title: props.item["user.name"] })
            }}
        />
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    subtitle: {
        fontSize: 13,
        color: color.subtitleColor,
        marginVertical: 1,
    },
})
