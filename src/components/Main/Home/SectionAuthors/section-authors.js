import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import SectionAuthorsItem from './../SectionAuthorsItem/section-authors-item';
import { color } from '../../../../globals/constants'

const SectionAuthors = (props) => {
    const authors = [
        {
            id: 1,
            author: 'Gorden Ramsay',
        },

        {
            id: 2,
            author: 'Hoang Long',
        },

        {
            id: 3,
            author: 'Phuong My',
        }

    ]

    const renderListItems = (authors) => {
        return authors.map(item => <SectionAuthorsItem item={item} />)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={styles.seeAll}>
                     <Text style={styles.text}>See all ></Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
                {renderListItems(authors)}
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

export default SectionAuthors
