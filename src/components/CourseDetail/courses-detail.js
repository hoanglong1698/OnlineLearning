import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native'
import { color } from './../../globals/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Author from './Author/author';
import GeneralInfomation from './GeneralInfomation/general-infomation';
import TouchableButton from '../Common/touchable-button';
import Contents from './Contents/contents';
import axios from 'axios';
import CircleButton from './CircleButton/circle-button';
import { Video } from 'expo-av';
import { AuthenticationContext } from '../../provider/authentication-provider';
import Comments from './Comments/comments';
import Exercise from './Exercises/exercises';

const Tab = createMaterialTopTabNavigator();

const CoursesDetail = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { title } = props.route.params;
    const idCourse = props.route.params.id;
    props.navigation.setOptions({ title: title });

    const [likeStatus, setLikeStatus] = useState(false);
    const [videoURL, setVideoURL] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
    const [activeTab, setActiveTab] = useState('Contents');
    const DefaultScreen = () => (
        <View></View>
    )
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
                setVideoURL(resCourseDetail.data.payload.promoVidUrl);
                setLikeStatus(resLikeStatus.data.likeStatus);
                setData(resCourseDetail.data.payload);
                setIsLoaded(true);
            }))

            .catch(function (error) {
                setIsLoaded(false);
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
            {isLoaded === true && <Video
                source={{ uri: videoURL }}
                posterSource={{ uri: data.imageUrl }}
                usePoster
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping={false}
                useNativeControls
                style={styles.video}
            />}
            {isLoaded === true && <ScrollView >
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.title}>{data.title}</Text>

                    <Author title={data.instructor.name} avatarURL={data.instructor.avatar}></Author>
                    <GeneralInfomation soldNumber={data.soldNumber} duration={data.totalHours} price={data.price} ratedNumber={data.ratedNumber} averagePoint={data.averagePoint}></GeneralInfomation>

                    <View style={styles.circleButtons}>
                        {likeStatus
                            ? <CircleButton iconName='heart' nameButton='Đã thích' onPress={() => onPressCircleButton("like")}></CircleButton>
                            : <CircleButton iconName='heart-outline' nameButton='Yêu thích' onPress={() => onPressCircleButton("like")}></CircleButton>
                        }
                        <CircleButton iconName='cart-outline' nameButton='Mua khóa học'></CircleButton>
                        <CircleButton iconName='arrow-down-bold-circle-outline' nameButton='Tải xuống'></CircleButton>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.containerIntro}>
                        <Text style={styles.headerIntro}>Bạn sẽ học được</Text>
                        {data.learnWhat.map((item) => <Text style={styles.introduction}>-    {item}</Text>)}
                    </View>

                    <View style={styles.containerIntro}>
                        <Text style={styles.headerIntro}>Yêu cầu</Text>
                        {data.requirement.map((item) => <Text style={styles.introduction}>{`\u2713`}  {item}</Text>)}
                    </View>

                    <View style={styles.containerIntro}>
                        <Text style={styles.headerIntro}>Mô tả</Text>
                        <Text style={styles.introduction}>{data.description}</Text>
                    </View>

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
                    <Tab.Screen name="BÀI HỌC"
                        component={activeTab === 'Contents' ? Contents : DefaultScreen}
                        initialParams={{ data: data.section, callbackToCourseDetail }}
                        listeners={{ focus: () => setActiveTab('Contents') }} />
                    <Tab.Screen name="ĐÁNH GIÁ"
                        component={activeTab === 'Comments' ? Comments : DefaultScreen}
                        initialParams={{ data: data.averagePoint }}
                        listeners={{ focus: () => setActiveTab('Comments') }} />
                    <Tab.Screen name="BÀI TẬP"
                        component={Exercise}
                        component={activeTab === 'Exercise' ? Exercise : DefaultScreen}
                        listeners={{ focus: () => setActiveTab('Exercise') }} />
                </Tab.Navigator>
            </ScrollView>}
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
        fontWeight: 'bold',
        color: color.headerText,
    },

    info: {
        fontSize: 14,
        color: color.infoTextColor
    },

    containerIntro: {
        marginBottom: 20,
    },

    headerIntro: {
        color: color.headerText,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    introduction: {
        fontSize: 14,
        color: color.headerText,
        textAlign: 'left',
        marginBottom: 2,
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
    },

    line: {
        borderBottomColor: color.border,
        borderBottomWidth: 0.5,
        marginBottom: 15,
    }
})
