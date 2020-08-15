import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { color } from './../../../globals/constants';
import CommentItem from './comment-item';

const Comments = (props) => {
    const [data, setData] = useState(props.route.params.data);
    const [rate, setRate] = useState({
        averagePoint: props.route.params.averagePoint,
        ratedNumber: props.route.params.ratedNumber
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.rateContainer}>
                <Text style={styles.averagePoint}>{rate.averagePoint}</Text>
                <Text>{rate.ratedNumber} bình chọn</Text>
                <Text>{rate.ratedNumber} điểm nội dung</Text>
                <Text>{rate.ratedNumber} điểm hình thức</Text>
                <Text>{rate.ratedNumber} điểm truyền đạt</Text>
            </View>
            {data.ratingList.map(item => <CommentItem item={item} />)}

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder='Tài khoản'
                    placeholderTextColor={color.placeholderTextColor}
                    autoCapitalize='none'
                   
                />
            </View>
        </ScrollView>
    )
}

export default Comments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.itemBackgroundColor,
    },

    rateContainer: {
        alignItems: 'center',
    },

    averagePoint: {
        fontSize: 30,
        color: color.headerBar
    },

    inputView: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: color.border,
        borderBottomWidth: 1,
    },

    inputText: {
        height: 45,
        color: color.inputText,
    },
})
