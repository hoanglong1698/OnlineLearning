import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { color } from './../../../globals/constants';
import CommentItem from './comment-item';
import { AirbnbRating } from 'react-native-elements';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';
import { ThemeContext } from '../../../provider/theme-provider';

const Comments = (props) => {
    const { theme } = useContext(ThemeContext);
    const authContext = useContext(AuthenticationContext);
    const [data, setData] = useState(props.route.params.data);
    const [rate, setRate] = useState({
        averagePoint: props.route.params.averagePoint,
        ratedNumber: props.route.params.ratedNumber
    });
    const [rating, setRating] = useState({
        courseId: props.route.params.courseId,
        formalityPoint: 0,
        contentPoint: 0,
        presentationPoint: 0,
        content: '',
    })

    const [status, setStatus] = useState({
        show: false,
        message: '',
    });

    const onPressSubmit = () => {
        axios.post('https://api.itedu.me​/course/rating-course', {
            courseId: rating.courseId,
            formalityPoint: rating.formalityPoint,
            contentPoint: rating.contentPoint,
            presentationPoint: rating.presentationPoint,
            content: rating.content,
        }, {
            headers: {
                'Authorization': 'Bearer ' + authContext.state.token
            }
        })
            .then(function (response) {
                setStatus({ show: true, message: "Đã gửi" })
            })
            .catch(function (error) {
                setStatus({ show: false, message: "Gửi bình luận không thành công" })
            });
    }

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.itemBackgroundColor, }}>
            <View style={styles.rateContainer}>
                <Text style={styles.averagePoint}>{rate.averagePoint}</Text>
                <Text style={{ color: theme.headerText }}>{rate.ratedNumber} bình chọn</Text>
                <Text style={{ color: theme.headerText }}>{rate.ratedNumber} điểm nội dung</Text>
                <Text style={{ color: theme.headerText }}>{rate.ratedNumber} điểm hình thức</Text>
                <Text style={{ color: theme.headerText }}>{rate.ratedNumber} điểm truyền đạt</Text>
            </View>

            <View style={styles.userRatingContainer}>
                <View style={styles.ratingStar}>
                    <Text style={{ fontSize: 18, marginRight: 21, color: theme.headerText }}>Nội dung</Text>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={rating.contentPoint}
                        size={20}
                        onFinishRating={(value) => setRating({ ...rating, contentPoint: value })}
                    />
                </View>

                <View style={styles.ratingStar}>
                    <Text style={{ fontSize: 18, marginRight: 15, color: theme.headerText }}>Hình thức</Text>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={rating.formalityPoint}
                        size={20}
                        onFinishRating={(value) => setRating({ ...rating, formalityPoint: value })}
                    />
                </View>

                <View style={styles.ratingStar}>
                    <Text style={{ fontSize: 18, marginRight: 20, color: theme.headerText }}>Trình bày</Text>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={rating.presentationPoint}
                        size={20}
                        onFinishRating={(value) => setRating({ ...rating, presentationPoint: value })}
                    />
                </View>

                <View style={styles.inputView} >
                    <TextInput
                        style={{ ...styles.inputText, color: theme.headerText }}
                        placeholder='Nhập bình luận'
                        placeholderTextColor={color.placeholderTextColor}
                        autoCapitalize='sentences'
                        onChangeText={(text) => setRating({ ...rating, content: text })}
                    />
                </View>
            </View>

            {status.show && <Text>{status.message}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={onPressSubmit}
            >
                <Text style={styles.signInText}>Gửi bình luận</Text>
            </TouchableOpacity>

            {data.ratingList.map(item => <CommentItem item={item} />)}
        </ScrollView>
    )
}

export default Comments

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    ratingStar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 15,
    },

    userRatingContainer: {
        marginTop: 20,
        marginHorizontal: 10,
    },

    button: {
        width: '70%',
        alignSelf: 'center',
        backgroundColor: color.button,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },

    signInText: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
    },
})
