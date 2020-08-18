import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from './../../../globals/constants';
import axios from 'axios';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { LessonIDContext } from '../courses-detail'

export default function Exercise(props) {
    const authContext = useContext(AuthenticationContext);
    const lessonIDContext = useContext(LessonIDContext);
    console.log(lessonIDContext.lessonID);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bài tập 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.itemBackgroundColor,
        padding: 15,
        paddingTop: 20,
    },

    header: {
        fontWeight: 'bold',
    }
})
