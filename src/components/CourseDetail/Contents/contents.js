import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SectionList, ActivityIndicator } from "react-native";
import Units from "./Units/units";
import Lessons from './Lessons/lessons';
import { color } from './../../../globals/constants';
import axios from 'axios';

const Content = (props) => {
    const { idCourse } = props.route.params;
    const [section, setSection] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const callbackToContents = (childData, id) => {
        props.route.params.callbackToCourseDetail(childData);
    }

    useEffect(() => {
        let url = 'https://api.itedu.me/course/get-course-detail/' + idCourse + '/null';
        axios.get(url)
            .then(function (response) {
                var data = response.data.payload.section.map(({ name: title, lesson: data, ...rest }) => ({ title, data, ...rest }));
                setSection(data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                setIsLoading(false);
            })
    }, []);

    return (
        <View style={styles.container}>
            {isLoading === true && <ActivityIndicator size="large" />}
            <SectionList
                sections={section}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Lessons item={item} callbackToContents={callbackToContents} />}
                renderSectionHeader={(item) => <Units item={item} />}
                renderSectionFooter={() => <View style={{ borderBottomColor: color.border, borderBottomWidth: 1 }} />}
            />
        </View>
    );
}

export default Content;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});
