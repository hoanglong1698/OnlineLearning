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

    const onPressListItem = (id, title) => {
        props.navigation.navigate(screenName.coursesDetailScreen, { id: id, title: title })
    }

    const thumbnail = (imageURL) => {
        return <View style={styles.thumbnail}>
            <Image style={styles.thumbnail}
                source={{ uri: imageURL }}>
            </Image>
        </View>
    }
    function formatDuration(num) {
        return moment().startOf('day').add(num, 'hours').format('H:mm')
    }

    const subtitle = (props) => {
        const createAt = moment(props.item.createdAt).format('d/M/yyyy');

        return <View>
            <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{props.item["instructor.user.name"] || props.item.instructorName || props.item.name}</Text>
            {props.item.totalHours !== undefined
                ? <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${createAt} \u00B7 Thời lượng ${formatDuration(props.item.totalHours)}`}</Text>
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
                if (props.item.title != null) {
                    onPressListItem(props.item.id, props.item.title)
                }
                else {
                    onPressListItem(props.item.id, props.item.courseTitle)
                }
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
