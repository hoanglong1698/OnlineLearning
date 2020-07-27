import React, { useState, useEffect } from 'react'
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

const Tab = createMaterialTopTabNavigator();

const CoursesDetail = (props) => {
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
    });

    const [videoURL, setVideoURL] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let url = 'https://api.itedu.me/course/get-course-detail/' + idCourse + '/null';
        axios.get(url)
            .then(function (response) {
                setThumbnail(response.data.payload.imageUrl);
                setVideoURL(response.data.payload.promoVidUrl);
                setState({
                    title: response.data.payload.title,
                    instructor: response.data.payload.instructor.name,
                    avatarURL: response.data.payload.instructor.avatar,
                    description: response.data.payload.description,
                    soldNumber: response.data.payload.soldNumber,
                    duration: response.data.payload.totalHours,
                });
            })
            .catch(function (error) {
                return (error);
            })
            .then(function () {
                setIsLoading(false);
            })
    }, []);

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
                    <GeneralInfomation soldNumber={state.soldNumber} duration={state.duration} ></GeneralInfomation>

                    <View style={styles.circleButtons}>
                        <CircleButton iconName='heart-outline' nameButton='Yêu thích'></CircleButton>
                        <CircleButton iconName='cart-outline' nameButton='Mua khóa học'></CircleButton>
                    </View>


                    <Text style={styles.introduction}>
                        {state.description}
                    </Text>

                    <TouchableButton title="Take a learning check" ></TouchableButton>
                    <TouchableButton title="View related paths and courses" ></TouchableButton>
                </View>

                <Tab.Navigator
                    independent={true}
                    initialRouteName="CONTENTS"
                    tabBarOptions={{
                        indicatorStyle: { height: 3, backgroundColor: color.headerBar },
                        labelStyle: { fontWeight: 'bold' }
                    }}
                >
                    <Tab.Screen name="CONTENTS" component={Contents} initialParams={{ idCourse: idCourse }} />
                    <Tab.Screen name="TRANSCRIPTS" component={Transcripts} initialParams={transcripts} />
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
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 20,
    }
})
