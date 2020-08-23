import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert, Share } from 'react-native'
import { color, screenName } from './../../globals/constants';
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
import { ThemeContext } from '../../provider/theme-provider';
import i18n from './../../../utils/i18n';

const Tab = createMaterialTopTabNavigator();

export const LessonIDContext = React.createContext();
const CoursesDetail = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext);
    const { title } = props.route.params;
    const idCourse = props.route.params.id;
    props.navigation.setOptions({ title: title });

    const [likeStatus, setLikeStatus] = useState(false);
    const [ownStatus, setOwnStatus] = useState(false);
    const [videoURL, setVideoURL] = useState();
    const [lessonID, setLessonID] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();
    const [activeTab, setActiveTab] = useState('Contents');
    const DefaultScreen = () => (
        <View></View>
    )
    const callbackToCourseDetail = (childData, id) => {
        setVideoURL(childData);
        console.log(id);
        setLessonID(id);
    }

    useEffect(() => {
        let url1 = 'https://api.itedu.me/course/get-course-detail/' + idCourse + '/null';
        let url2 = 'https://api.itedu.me/user/get-course-like-status/' + idCourse;
        let url3 = 'https://api.itedu.me/user/check-own-course/' + idCourse;
        axios.all([
            axios.get(url1),
            axios.get(url2, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            }),
            axios.get(url3, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            }),
        ])
            .then(axios.spread(function (resCourseDetail, resLikeStatus, resOwnStatus) {
                setVideoURL(resCourseDetail.data.payload.promoVidUrl);
                setLikeStatus(resLikeStatus.data.likeStatus);
                setOwnStatus(resOwnStatus.data.payload.isUserOwnCourse);
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

    const onPressCircleButton = async (nameButton) => {
        if (nameButton === "like") {
            axios.post('https://api.itedu.me/user/like-course', {
                courseId: idCourse,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    setLikeStatus(!likeStatus);
                })
                .catch(function (error) {
                    Alert.alert("Lỗi", error.response.data.message);
                });
            return;
        }

        if (nameButton === "buy") {
            axios.post('https://api.itedu.me/payment/get-free-courses', {
                courseId: idCourse,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
                .then(function (response) {
                    setOwnStatus(!ownStatus);
                    Alert.alert("Đăng ký thành công", "Cảm ơn quý khách đã sử dụng dịch vụ");
                })
                .catch(function (error) {
                    Alert.alert("Lỗi", error.response.data.message);
                    console.log(error);
                });
            return;
        }

        if (nameButton === "share") {
            try {
                const result = await Share.share({
                    message:
                        'https://itedu.me/course-detail/' + idCourse,
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                alert(error.message);
            };
            return;
        }
    }

    const onPressRelate = () => {
        props.navigation.navigate(screenName.listCoursesScreen, { title: i18n.t("RelateCourses"), data: data.coursesLikeCategory })
    }

    return (
        <LessonIDContext.Provider value={{ lessonID }}>
            <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
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
                        <Text style={{ ...styles.title, color: theme.headerText }}>{data.title}</Text>

                        <Author title={data.instructor.name} avatarURL={data.instructor.avatar}></Author>
                        <GeneralInfomation soldNumber={data.soldNumber} duration={data.totalHours} price={data.price} ratedNumber={data.ratedNumber} averagePoint={data.averagePoint}></GeneralInfomation>

                        <View style={styles.circleButtons}>
                            {likeStatus
                                ? <CircleButton iconName='heart' nameButton={i18n.t("Liked")} onPress={() => onPressCircleButton("like")}></CircleButton>
                                : <CircleButton iconName='heart-outline' nameButton={i18n.t("Like")} onPress={() => onPressCircleButton("like")}></CircleButton>
                            }
                            {ownStatus
                                ? <CircleButton iconName='check-circle' nameButton={i18n.t("OwnedCourse")}></CircleButton>
                                : <CircleButton iconName='cart-outline' nameButton={i18n.t("RegisterCourse")} onPress={() => onPressCircleButton("buy")}></CircleButton>
                            }

                            <CircleButton iconName='share' nameButton={i18n.t("Share")} onPress={() => onPressCircleButton("share")}></CircleButton>
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.containerIntro}>
                            <Text style={{ ...styles.headerIntro, color: theme.headerText }}>{i18n.t("YouWillLearn")}</Text>
                            {data.learnWhat.map((item) => <Text style={{ ...styles.introduction, color: theme.headerText }}>-    {item}</Text>)}
                        </View>

                        <View style={styles.containerIntro}>
                            <Text style={{ ...styles.headerIntro, color: theme.headerText }}>{i18n.t("Requirement")}</Text>
                            {data.requirement.map((item) => <Text style={{ ...styles.introduction, color: theme.headerText }}>{`\u2713`}  {item}</Text>)}
                        </View>

                        <View style={styles.containerIntro}>
                            <Text style={{ ...styles.headerIntro, color: theme.headerText }}>{i18n.t("Description")}</Text>
                            <Text style={{ ...styles.introduction, color: theme.headerText }}>{data.description}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPressRelate}
                        >
                            <Text style={styles.signInText}>{i18n.t("ViewRelateCourses")}</Text>
                        </TouchableOpacity>
                    </View>

                    <Tab.Navigator
                        independent={true}
                        initialRouteName={i18n.t("ContentTab")}
                        tabBarOptions={{
                            indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                            labelStyle: { fontWeight: 'bold' }
                        }}
                    >
                        <Tab.Screen name={i18n.t("ContentTab")}
                            component={activeTab === 'Contents' ? Contents : DefaultScreen}
                            initialParams={{ data: data.section, callbackToCourseDetail }}
                            listeners={{ focus: () => setActiveTab('Contents') }} />
                        <Tab.Screen name={i18n.t("RatingTab")}
                            component={activeTab === 'Comments' ? Comments : DefaultScreen}
                            initialParams={{
                                data: data.ratings, averagePoint: data.averagePoint,
                                ratedNumber: data.ratedNumber, formalityPoint: data.formalityPoint,
                                contentPoint: data.contentPoint, presentationPoint: data.presentationPoint,
                                courseId: idCourse
                            }}
                            listeners={{ focus: () => setActiveTab('Comments') }} />
                        <Tab.Screen name={i18n.t("ExerciseTab")}
                            component={activeTab === 'Exercise' ? Exercise : DefaultScreen}
                            listeners={{ focus: () => setActiveTab('Exercise') }} />
                    </Tab.Navigator>
                </ScrollView>}
            </View>
        </LessonIDContext.Provider>
    )
}

export default CoursesDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },

    button: {
        marginVertical: 15,
        alignSelf: 'stretch',
        backgroundColor: color.button,
        borderRadius: 5,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
    },

    signInText: {
        fontWeight: 'bold',
        color: color.buttonText,
        fontSize: 16,
    },
})
