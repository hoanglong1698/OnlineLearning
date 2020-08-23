import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import { ListItem } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../provider/theme-provider';

const ListCoursesItem = (props) => {
    const { theme } = useContext(ThemeContext)

    const onPressListItem = () => {
        props.navigation.navigate(screenName.coursesDetailScreen, { item: props.item })
    }

    const thumbnail = (imageURL) => {
        return <View style={styles.thumbnail}>
            <Image style={styles.thumbnail}
                source={{ uri: imageURL }}>
            </Image>
        </View>
    }

    const subtitle = (props) => {
        return <View>
            <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{props.item.author}</Text>
            <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${props.item.level} \u00B7 ${props.item.released} \u00B7 ${props.item.duration}`}</Text>
            <Rating style={styles.rating}
                defaultRating={4}
                type='star'
                fractions={1}
                ratingCount={5}
                imageSize={12}
            />
        </View>
    }

    const subMenu = (props) => {
        console.log('3 dot')
    }

    return (
        <ListItem
            title={props.item.title}
            titleStyle={{ color: theme.headerText, }}
            containerStyle={{backgroundColor: theme.itemBackgroundColor}}
            leftElement={() => thumbnail(props.item.image)}
            subtitle={() => subtitle(props)}
            bottomDivider
            rightElement={<MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                onPress={subMenu}
                color={theme.headerText}
            />
            }
            onPress={() => {
                props.onPressListItem(props.item)
            }}
        />
    )
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 13,
        color: color.subtitleColor,
    },

    thumbnail: {
        width: 90,
        height: 60,
    },

    rating: {
        marginTop: 5,
        alignSelf: 'flex-start',
    }

})

export default ListCoursesItem
