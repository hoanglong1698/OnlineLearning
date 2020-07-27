import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import Units from "./Units/units";
import Lessons from './Lessons/lessons';
import { color } from './../../../globals/constants';
import axios from 'axios';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Content = (props) => {
    const { idCourse } = props.route.params
    const [section, setSection] = useState();

    useEffect(() => {
        let url = 'https://api.itedu.me/course/get-course-detail/' + idCourse + '/null';
        axios.get(url)
            .then(function (response) {
                const data = response.data.payload.section.map(({ name: title, lesson: data, ...rest }) => ({ title, data, ...rest }));
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
            <SectionList
                sections={section}
                renderItem={({ item }) => <Lessons item={item} />}
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
