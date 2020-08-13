import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { color } from './../../globals/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Author from './Author/author';
import GeneralInfomation from './GeneralInfomation/general-infomation';
import TouchableButton from '../Common/touchable-button';
import Contents from './Contents/contents';
import Transcripts from './Transcripts/transcripts';
import axios from 'axios';
import CircleButton from './CircleButton/circle-button';
import { Video } from 'expo-av';
import { AuthenticationContext } from '../../provider/authentication-provider';

const Tab = createMaterialTopTabNavigator();

const CoursesDetail = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { title } = props.route.params;
    const idCourse = props.route.params.id;
    props.navigation.setOptions({ title: title });
    const transcripts = '';

    const [state, setState] = useState({
        title: '',
        instructor: '',
        avatarURL: '',
        description: '',
        soldNumber: '',
        duration: '',
        likeStatus: '',
        price: '',
    });
    const [likeStatus, setLikeStatus] = useState(false);
    const [videoURL, setVideoURL] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const callbackToCourseDetail = (childData) => {
        setVideoURL(childData);
    }

    useEffect(() => {
        let url1 = 'https://api.itedu.me/course/get-course-detail/' + idCourse + '/null';
        let url2 = 'https://api.itedu.me/user/get-course-like-status/' + idCourse;
        axios.all([
            axios.get(url1),
            axios.get(url2, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            }),
        ])
            .then(axios.spread(function (resCourseDetail, resLikeStatus) {
                setThumbnail(resCourseDetail.data.payload.imageUrl);
                setVideoURL(resCourseDetail.data.payload.promoVidUrl);
                setLikeStatus(resLikeStatus.data.likeStatus);
                setState({
                    title: resCourseDetail.data.payload.title,
                    instructor: resCourseDetail.data.payload.instructor.name,
                    avatarURL: resCourseDetail.data.payload.instructor.avatar,
                    description: resCourseDetail.data.payload.description,
                    soldNumber: resCourseDetail.data.payload.soldNumber,
                    duration: resCourseDetail.data.payload.totalHours,
                    price: resCourseDetail.data.payload.price,
                });
            }))

            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                setIsLoading(false);
            })

    }, []);

    const onPressCircleButton = (nameButton) => {
        if (nameButton === "like") {
            setLikeStatus(!likeStatus);
            axios.post('https://api.itedu.me/user/like-course', {
                courseId: idCourse,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    console.log(response.data.message);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <View style={styles.container}>
            {isLoading === true && <ActivityIndicator size="large" />}
            <Video
                source={{ uri: videoURL }}
                posterSource={{ uri: thumbnail }}
                usePoster
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping
                useNativeControls
                style={styles.video}
            />
            <ScrollView >
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.title}>{state.title}</Text>

                    <Author title={state.instructor} avatarURL={state.avatarURL}></Author>
                    <GeneralInfomation soldNumber={state.soldNumber} duration={state.duration} price={state.price}></GeneralInfomation>

                    <View style={styles.circleButtons}>
                        {likeStatus
                            ? <CircleButton iconName='heart' nameButton='Đã thích' onPress={() => onPressCircleButton("like")}></CircleButton>
                            : <CircleButton iconName='heart-outline' nameButton='Yêu thích' onPress={() => onPressCircleButton("like")}></CircleButton>
                        }
                        <CircleButton iconName='cart-outline' nameButton='Mua khóa học'></CircleButton>
                        <CircleButton iconName='arrow-down-bold-circle-outline' nameButton='Tải xuống'></CircleButton>
                    </View>


                    <Text style={styles.introduction}>
                        {state.description}
                    </Text>

                    <TouchableButton title="Xem các khóa học liên quan" ></TouchableButton>
                </View>

                <Tab.Navigator
                    independent={true}
                    initialRouteName="BÀI HỌC"
                    tabBarOptions={{
                        indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                        labelStyle: { fontWeight: 'bold' }
                    }}
                >
                    <Tab.Screen name="BÀI HỌC" component={Contents} initialParams={{ idCourse: idCourse, callbackToCourseDetail }} />
                    <Tab.Screen name="BÌNH LUẬN" component={Transcripts} initialParams={transcripts} />
                </Tab.Navigator>
            </ScrollView>
        </View>
    )
}

export default CoursesDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 24,
        marginVertical: 5,
    },

    info: {
        fontSize: 14,
        color: color.infoTextColor
    },

    introduction: {
        fontSize: 14,
        color: color.headerText,
        marginBottom: 10,
        textAlign: 'left'
    },

    video: {
        width: '100%',
        height: 200,

    },

    circleButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 20,
    }
})
