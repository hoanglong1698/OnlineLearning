import React, {useContext} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { color } from './../../../globals/constants';
import ListCourses from '../../Courses/ListCourses/list-courses';
import { download } from './../../../globals/database';
import { ThemeContext } from '../../../provider/theme-provider';

const Download = (props) => {
    let data = download;
    const RemoveAll = () => {
        data.splice(0, data.length);
    }

    const { theme } = useContext(ThemeContext)
    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <View style={styles.header}>
                <Text style={{ ...styles.title, color: theme.headerText }}>{data.length} Courses (150 MB)</Text>
                <TouchableOpacity
                    style={{ ...styles.seeAll, backgroundColor: theme.seeAllButtonColor }}
                    onPress={RemoveAll}
                >
                    <Text style={{ ...styles.text, color: theme.seeAllTextColor}}>REMOVE ALL</Text>
                </TouchableOpacity>
            </View>

            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </View>
    )
}

export default Download

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginHorizontal: 10,
        marginVertical: 25,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText
    },

    seeAll: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 0,
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 100,
    },

    text: {
        fontSize: 14,
        color: color.seeAllTextColor,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
