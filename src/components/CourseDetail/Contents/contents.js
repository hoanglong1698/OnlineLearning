import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import Units from "./Units/units";
import Lessons from './Lessons/lessons';
import { units } from './../../../globals/database';
import { color } from './../../../globals/constants';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Content = (props) => {
    let data = props.route.params || [];
    console.log("Hello");
    //console.log(data);
    //console.log(units);
    return (
        <View style={styles.container}>
            <SectionList
                sections={units}
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
