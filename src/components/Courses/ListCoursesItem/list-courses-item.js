import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Share } from 'react-native'

const ListCoursesItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                Alert.alert('Info', 'Press on sections list',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => {
                                console.log('Press on cancel')
                            }
                        },
                        {
                            text: 'OK',
                            onPress: () => {
                                Share.share({
                                    message: 'Hello share',
                                })
                            }
                        }
                    ]
                )
            }}>
            <Image style={styles.image} source={require('../../../../assets/icon-course.png')} />

            <View style={{ margin: 5 }}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} - ${props.item.released} - ${props.item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
        margin: 5,
        flexDirection: 'row'
    },

    image: {
        width: 100,
        height: 100
    },

    darkText: {
        color: 'darkgray'
    }
})

export default ListCoursesItem
