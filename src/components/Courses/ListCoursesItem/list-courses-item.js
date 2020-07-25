import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import { ListItem } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../../provider/theme-provider';
import moment from 'moment';

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

    const createAt = moment(props.item.createdAt).format('LL');

    const subtitle = (props) => {
        const createAt = moment(props.item.createdAt).format('LL');

        return <View>
            <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{props.item["instructor.user.name"] || props.item.instructorName || props.item.name}</Text>
            {props.item.totalHours !== undefined
                ? <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${createAt} \u00B7 ${props.item.totalHours} hours`}</Text>
                : <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${createAt}`}</Text>
            }
            <Rating style={styles.rating}
                defaultRating={4}
                type='star'
                fractions={1}
                ratingCount={5}
                imageSize={12}
                tintColor={theme.itemBackgroundColor}
            />
        </View>
    }

    const subMenu = (props) => {
        console.log('3 dot')
    }

    return (
        <ListItem
            title={props.item.title || props.item.courseTitle}
            titleStyle={{ color: theme.headerText, }}
            containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
            leftElement={() => thumbnail(props.item.imageUrl || props.item.courseImage)}
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
