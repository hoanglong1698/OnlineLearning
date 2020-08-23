import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AirbnbRating } from 'react-native-elements';
import { color, screenName } from '../../../../globals/constants'
import { ThemeContext } from '../../../../provider/theme-provider';
import moment from 'moment';
import i18n from './../../../../../utils/i18n';

const SectionCoursesItem = (props) => {
    const onPressSectionItem = (id, title) => {
        props.navigation.navigate(screenName.coursesDetailScreen, { id: id, title: title })
    }

    const { theme } = useContext(ThemeContext)

    function formatDuration(num) {
        return moment().startOf('day').add(num, 'hours').format('H:mm')
    }

    function formatPrice(price) {
        if (price === 0) {
            return i18n.t("Free");
        }
        else {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND';
        }
    }

    const latestLearnTime = moment(props.item.latestLearnTime, 'YYYY-MM-DD').format('D/M/YYYY');
    const updatedAt = moment(props.item.updatedAt, 'YYYY-MM-DD').format('D/M/YYYY');
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
                <Text style={{ ...styles.title, color: theme.headerText }} numberOfLines={2}>{props.item.title || props.item.courseTitle}</Text>
                <Text style={{ ...styles.info, color: theme.infoTextColor }}>{props.item["instructor.user.name"] || props.item.instructorName}</Text>
                {props.item.updatedAt !== undefined && <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{updatedAt}  {`\u00B7`}  {i18n.t("Duration")} {formatDuration(props.item.totalHours)}</Text>}
                {props.item.latestLearnTime && <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{i18n.t("LastedLearnTime")}: {`${latestLearnTime}`}</Text>}
                {props.item.learnLesson !== undefined && <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{i18n.t("Learned")} {props.item.learnLesson}/{props.item.total} {i18n.t("Lesson")}</Text>}

                {props.item.formalityPoint !== undefined && props.item.contentPoint !== undefined && props.item.presentationPoint !== undefined &&
                    <View style={{ flexDirection: 'row' }}>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            defaultRating={(props.item.formalityPoint + props.item.contentPoint + props.item.presentationPoint) / 3}
                            size={11}
                            isDisabled={true}
                        />
                        <Text style={{ marginLeft: 5, color: color.infoTextColor, fontSize: 12 }}>({props.item.ratedNumber})</Text>
                    </View>}

                {props.item.price !== undefined && <Text style={styles.price}>{formatPrice(props.item.price)}</Text>}
                {props.item.coursePrice !== undefined && <Text style={styles.price}>{formatPrice(props.item.coursePrice)}</Text>}
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
    subtitle: {
        marginTop: 2,
    },
    content: {
        marginVertical: 10,
        marginLeft: 10,
        alignItems: 'flex-start',
    },

    item: {
        marginVertical: 10,
        marginRight: 10,
        width: 210,
        maxHeight: 250,
        backgroundColor: color.itemBackgroundColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        paddingBottom: 5,
        elevation: 6,
    },

    image: {
        height: 100,
    },

    info: {
        fontSize: 13,
        color: color.infoTextColor,
        marginVertical: 2,
        fontWeight: 'bold',
    },

    price: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 5,
    }
})


export default SectionCoursesItem
