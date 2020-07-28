import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import SectionAuthorsItem from './../SectionAuthorsItem/section-authors-item';
import { color } from '../../../../globals/constants'
import { ThemeContext } from '../../../../provider/theme-provider';
import axios from 'axios';

const SectionAuthors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('https://api.itedu.me​/instructor')
            .then(function (response) {
                setAuthors(response.data.payload);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const renderListItems = (authors) => {
        return authors.map(item => <SectionAuthorsItem item={item} />)
    }

    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ ...styles.title, color: theme.headerText }}>{props.title}</Text>
                <TouchableOpacity style={{ ...styles.seeAll, backgroundColor: theme.seeAllButtonColor }}>
                    <Text style={{ ...styles.text, color: theme.seeAllTextColor }}>Xem thêm</Text>
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
