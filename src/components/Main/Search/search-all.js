import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import ListCourses from './../../Courses/ListCourses/list-courses';
import { color } from './../../../globals/constants';
import { ThemeContext } from 'react-native-elements';
import i18n from './../../../../utils/i18n';

export default function SearchAll(props) {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState(props.route.params.data);

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <View style={styles.sectionHeader}>
                <Text style={styles.title}>{i18n.t("Courses")}</Text>
                <TouchableOpacity style={styles.seeAll} onPress={() => props.navigation.navigate(i18n.t("CoursesTab"))}>
                    <Text style={styles.text}>{data.courses.total} {i18n.t("Result")}</Text>
                </TouchableOpacity>
            </View>
            <ListCourses navigation={props.navigation} data={data.courses.data}></ListCourses>

            <View style={styles.sectionHeader}>
                <Text style={styles.title}>{i18n.t("Instructor")}</Text>
                <TouchableOpacity style={styles.seeAll} onPress={() => props.navigation.navigate(i18n.t("InstructorsTab"))}>
                    <Text style={styles.text}>{data.instructors.total} {i18n.t("Result")}</Text>
                </TouchableOpacity>
            </View>
            <ListCourses navigation={props.navigation} data={data.instructors.data}></ListCourses>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeader: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText,
    },
    seeAll: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 60,
    },
    text: {
        fontSize: 12,
        color: color.seeAllTextColor,
        textAlign: 'center',
    }

})
