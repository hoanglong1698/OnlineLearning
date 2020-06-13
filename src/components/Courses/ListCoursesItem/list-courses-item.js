import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Share } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import { ListItem } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListCoursesItem = (props) => {
    const onPressListItem = () => {
        props.navigation.navigate(screenName.coursesDetailScreen, { item: props.item })
    }

    const thumbnail = (props) => {
        return <Image style={styles.thumbnail}
            source={require('../../../../assets/icon-course.png')}>
        </Image>
    }

    const subtitle = (props) => {
        return <View>
            <Text style={styles.subtitle}>{props.item.author}</Text>
            <Text style={styles.subtitle}>{`${props.item.level} \u00B7 ${props.item.released} \u00B7 ${props.item.duration}`}</Text>
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
            titleStyle={{ color: color.headerText, }}
            leftElement={() => thumbnail()}
            subtitle={() => subtitle(props)}
            bottomDivider
            rightElement={<MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                onPress={subMenu} />}
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
