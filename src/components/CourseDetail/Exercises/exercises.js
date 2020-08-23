import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { color } from './../../../globals/constants';
import axios from 'axios';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { LessonIDContext } from '../courses-detail'
import { ThemeContext } from '../../../provider/theme-provider';
import i18n from './../../../../utils/i18n';

export default function Exercise(props) {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext);
    const lessonIDContext = useContext(LessonIDContext);
    const [data, setData] = useState('');

    useEffect(() => {
        axios.post('https://api.itedu.me/exercise/student/list-exercise-lesson', {
            lessonId: lessonIDContext.lessonID,
        }, {
            headers: {
                'Authorization': 'Bearer ' + authContext.state.token
            }
        })
            .then(function (response) {
                axios.post('https://api.itedu.me/exercise/student/exercise-test', {
                    exerciseId: response.data.payload.exercises[0].id,
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + authContext.state.token
                    }
                })
                    .then(function (response) {
                        setData(response.data.payload.exercises);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <View style={{ ...styles.container, backgroundColor: theme.itemBackgroundColor, }}>
            {lessonIDContext.lessonID != undefined
                ? <View>
                    {data.exercises_questions != undefined
                        ? < Text style={{ ...styles.header, color: theme.headerText }}>{i18n.t("Exercise")} 1.  <Text style={{ fontWeight: 'normal', color: theme.headerText }}>{data.title}</Text></Text>
                        : <Text style={{ ...styles.header, textAlign: 'center', color: theme.headerText }}>{i18n.t("NoExercise")}</Text>
                    }
                    {data.exercises_questions != undefined && data.exercises_questions.map((item, index) => {
                        return (
                            <View style={styles.question}>
                                <Text style={{color: theme.headerText}}>Câu {index + 1}: {item.content}</Text>
                                {item.exercises_answers != undefined && item.exercises_answers.map((item, index) => {
                                    return (
                                        <Text style={{ ...styles.answer, color: theme.headerText }}>{String.fromCharCode(97 + index).toUpperCase()}.  {item.content}</Text>
                                    )
                                })}
                            </View>)
                    })}
                </View>
                : <Text style={{ ...styles.header, textAlign: 'center', color: theme.headerText }}>Lesson này không có bài tập. Vui lòng chọn các lesson khác để xem bài tập</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
    },

    header: {
        fontWeight: 'bold',
    },

    question: {
        marginLeft: 15,
        marginTop: 20,
    },
    answer: {
        marginLeft: 15,
    }
})
