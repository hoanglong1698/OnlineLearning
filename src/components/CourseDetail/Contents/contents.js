import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, SectionList, ActivityIndicator, ScrollView } from "react-native";
import Units from "./Units/units";
import Lessons from './Lessons/lessons';
import { color } from './../../../globals/constants';
import { ThemeContext } from "../../../provider/theme-provider";

const Content = (props) => {
    const [section, setSection] = useState(props.route.params.data.map(({ name: title, lesson: data, ...rest }) => ({ title, data, ...rest })));
    const callbackToContents = (childData, id) => {
        props.route.params.callbackToCourseDetail(childData, id);
    }
    const { theme } = useContext(ThemeContext);
    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
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
