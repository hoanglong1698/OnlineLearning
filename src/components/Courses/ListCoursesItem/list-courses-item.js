import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AirbnbRating } from 'react-native-elements';
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
        const latestLearnTime = moment(props.item.latestLearnTime, 'YYYY-MM-DD').format('D/M/YYYY');
        const updatedAt = moment(props.item.updatedAt, 'YYYY-MM-DD').format('D/M/YYYY');

        return <View>
            <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{props.item["instructor.user.name"] || props.item.instructorName || props.item.name}</Text>
            {props.item.updatedAt !== undefined && <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>{updatedAt}  {`\u00B7`}  Thời lượng {formatDuration(props.item.totalHours)}</Text>}
            {props.item.latestLearnTime && <Text style={{ ...styles.subtitle, color: theme.subtitleColor }}>Ngày học gần nhất: {`${latestLearnTime}`}</Text>}
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
