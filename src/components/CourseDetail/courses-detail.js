import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, requireNativeComponent } from 'react-native'
import { color } from './../../globals/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Author from './Author/author';
import GeneralInfomation from './GeneralInfomation/general-infomation';
import CircleButtonList from './CircleButtonList/circle-button-list';
import TouchableButton from '../Common/touchable-button';
import Contents from './Contents/contents';
import Transcripts from './Transcripts/transcripts';

const Tab = createMaterialTopTabNavigator();

const CoursesDetail = (props) => {
    const title = props.route.params.title;
    const author = props.route.params.author;
    const duration = props.route.params.duration;
    const level = props.route.params.level;
    const released = props.route.params.released;
    const description = props.route.params.description;
    const units = props.route.params.units;
    const transcripts = props.route.params.transcripts;
    props.navigation.setOptions({ title: title });

    return (
        <View style={styles.container}>
            <Image style={styles.video} source={require('../../../assets/icon-course.png')}></Image>
            <ScrollView >
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.title}>{title}</Text>

                    <Author title={author}></Author>
                    <GeneralInfomation level={level} released={released} duration={duration} ></GeneralInfomation>
                    <CircleButtonList></CircleButtonList>

                    <Text style={styles.introduction}>
                        {description}
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
                    <Tab.Screen name="CONTENTS" component={Contents} initialParams={units} />
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

    }
})
