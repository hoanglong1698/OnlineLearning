import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements';
import { color, screenName } from '../../../../globals/constants'
import { ThemeContext } from '../../../../provider/theme-provider';
import moment from 'moment';

const SectionCoursesItem = (props) => {
    const onPressSectionItem = (id, title) => {
        props.navigation.navigate(screenName.coursesDetailScreen, { id: id, title: title })
    }

    const { theme } = useContext(ThemeContext)

    function formatDuration(num) {
        return moment().startOf('day').add(num, 'hours').format('H:mm')
    }

    const createAt = moment(props.item.createdAt).format('d/M/yyyy');

    return (
        <TouchableOpacity
            style={{ ...styles.item, backgroundColor: theme.itemBackgroundColor }}
            onPress={() => {
                if (props.item.title != null) {
                    onPressSectionItem(props.item.id, props.item.title)
                }
                else {
                    onPressSectionItem(props.item.id, props.item.courseTitle)
                }
            }}
        >
            <Image source={{ uri: props.item.imageUrl || props.item.courseImage }} style={styles.image} />

            <View style={styles.content}>
                <Text style={{ ...styles.title, color: theme.headerText }}>{props.item.title || props.item.courseTitle}</Text>
                <Text style={{ ...styles.info, color: theme.infoTextColor }}>{props.item["instructor.user.name"] || props.item.instructorName}</Text>
                {props.item.totalHours !== undefined
                    ? <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${createAt}  \u00B7  Thời lượng ${formatDuration(props.item.totalHours)}`}</Text>
                    : <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{`${createAt}`}</Text>
                }
                <Rating style={{ marginTop: 5 }}
                    type='star'
                    imageSize={12}
                    tintColor={theme.itemBackgroundColor}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText,
        marginRight: 5,
    },

    content: {
        marginVertical: 10,
        marginLeft: 10,
        alignItems: 'flex-start',
    },

    item: {
        marginVertical: 10,
        marginRight: 10,
        width: 200,
        height: 235,
        backgroundColor: color.itemBackgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    image: {
        width: 200,
        height: 100,
    },

    info: {
        fontSize: 13,
        color: color.infoTextColor,
        marginVertical: 2,
    }
})


export default SectionCoursesItem
