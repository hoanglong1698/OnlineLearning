import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color } from './../../globals/constants';

import Author from './Author/author';
import GeneralInfomation from './GeneralInfomation/general-infomation';
import CircleButtonList from './CircleButtonList/circle-button-list';
import TouchableButton from '../Common/touchable-button';

const CoursesDetail = (props) => {
    //let item = props.route.params.item

    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native: Getting Started</Text>

            <Author title="Hoang Long Nguyen"></Author>
            <GeneralInfomation></GeneralInfomation>
            <CircleButtonList></CircleButtonList>

            <Text style={styles.introduction}>
                Create native apps for Android and iOS using React.
                React Native combines the best parts of native development
                with React, a best-in-class JavaScript library for building
                user interfaces.
                </Text>
            <TouchableButton title="Take a learning check" ></TouchableButton>
            <TouchableButton title="View related paths and courses" ></TouchableButton>

        </View>
    )
}

export default CoursesDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 10,
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
        marginVertical: 10,
    }
})
