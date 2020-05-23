import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList} from "react-native";
import Units from "./Units/units";
import Lessons from './Lessons/lessons';
import { unitsData } from './../../../globals/database';
import { ListItem } from 'react-native-elements';
import { color } from './../../../globals/constants';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const App = () => (
    <View style={styles.container}>
        <SectionList
            sections={unitsData}
            renderItem={() => <Lessons />}
            renderSectionHeader={(item) => <Units item={item} />}
            renderSectionFooter={() => <View style={{borderBottomColor: color.border, borderBottomWidth: 1}}/>}
        />
    </View>
);

export default App;

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
