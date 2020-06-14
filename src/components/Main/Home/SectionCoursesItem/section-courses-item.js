import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements';
import { color, screenName } from '../../../../globals/constants'
import { ThemeContext } from '../../../../provider/theme-provider';

const SectionCoursesItem = (props) => {
    const onPressSectionItem = () => {
        props.navigation.navigate(screenName.coursesDetailScreen, { item: props.item })
    }

    const { theme } = useContext(ThemeContext)

    return (
        <TouchableOpacity
            style={{ ...styles.item, backgroundColor: theme.itemBackgroundColor }}
            onPress={onPressSectionItem}
        >
            <Image source={{ uri: props.item.image }} style={styles.image} />

            <View style={styles.content}>
                <Text style={{ ...styles.title, color: theme.headerText }}>{props.item.title}</Text>
                <Text style={{ ...styles.info, color: theme.infoTextColor }}>{props.item.author}</Text>
                <Text style={{ ...styles.info, color: theme.infoTextColor }}>{`${props.item.level} - ${props.item.released} - ${props.item.duration}`}</Text>
                <Rating style={{ marginTop: 5 }}
                    defaultRating={4}
                    type='star'
                    fractions={1}
                    ratingCount={5}
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
        color: color.infoTextColor
    }
})


export default SectionCoursesItem
