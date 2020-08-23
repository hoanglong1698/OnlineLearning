import React, { useContext } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item'
import { color, screenName } from '../../../../globals/constants'
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../../../../provider/theme-provider';
import i18n from './../../../../../utils/i18n';

const Stack = createStackNavigator();

const SectionCourses = (props) => {
    let data = props.data || [];
    const { theme } = useContext(ThemeContext);

    const renderListItems = (courses) => {
        return courses.map(item => <SectionCoursesItem navigation={props.navigation} item={item} />)
    }

    const onPressSeeAll = () => {
        props.navigation.navigate(screenName.listCoursesScreen, { title: props.title, data: data })
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ ...styles.title, color: theme.headerText }}>{props.title}</Text>
                <TouchableOpacity style={{ ...styles.seeAll, backgroundColor: theme.seeAllButtonColor }} onPress={onPressSeeAll}>
                    <Text style={{ ...styles.text, color: theme.seeAllTextColor }}>{i18n.t("SeeMore")}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(data)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 25,
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
        marginRight: 15,
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 70,
    },

    text: {
        fontSize: 12,
        color: color.seeAllTextColor,
        textAlign: 'center',
    }
})


export default SectionCourses