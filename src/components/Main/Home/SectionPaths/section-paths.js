import React, { useContext } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { render } from 'react-dom'
import { color } from '../../../../globals/constants'
import { paths } from '../../../../globals/database'
import SectionPathsItem from './../SectionPathsItem/section-paths-item';
import { ThemeContext } from '../../../../provider/theme-provider'

const SectionPaths = (props) => {

    const renderListItems = (courses) => {
        return courses.map(item => <SectionPathsItem item={item} />)
    }

    const { theme } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ ...styles.title, color: theme.headerText }}>{props.title}</Text>
                <TouchableOpacity style={{ ...styles.seeAll, backgroundColor: theme.seeAllButtonColor }}>
                    <Text style={{ ...styles.text, color: theme.seeAllTextColor }}>See all {">"}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(paths)}
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
        width: 60,
    },

    text: {
        fontSize: 12,
        color: color.seeAllTextColor,
        textAlign: 'center',
    }
})


export default SectionPaths