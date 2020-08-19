import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { color } from './../../../globals/constants';
import { ThemeContext } from '../../../provider/theme-provider';
import { AirbnbRating } from 'react-native-elements';
import moment from 'moment';

export default function CommentItem(props) {
    const { theme } = useContext(ThemeContext)
    const [data, setData] = useState(props.item);
    return (
        <View style={styles.container}>
            <Image source={{ uri: data.user.avatar }}
                style={styles.avatar}
            />

            <View style={styles.containerRating}>
                <Text style={{ ...styles.text, color: theme.headerText }}>{data.user.name}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={data.averagePoint}
                        size={13}
                        isDisabled={true}
                    />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, color: theme.headerText }}>{moment(data.updatedAt).format('D/M/YYYY HH:mm:ss')}</Text>
                </View>
                <Text style={{ alignSelf: 'center', marginLeft: 4, width: 230, color: theme.headerText }}>{data.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        borderTopColor: color.border,
        borderTopWidth: 0.5,
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 15,
    },

    text: {
        color: color.headerText,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    containerRating: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
})
