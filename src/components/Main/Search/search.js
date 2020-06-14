import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import SearchBarView from './SearchBarView/search-bar-view';
import { ListItem } from 'react-native-elements'
import { color, screenName } from './../../../globals/constants';

const Search = (props) => {
    const history = [
        {
            title: 'React Native',
        },
        {
            title: 'Android',
        },
        {
            title: 'iOS',
        },
    ]

    return (
        <View>
            <SearchBarView />
            <View style={styles.header}>
                <Text style={styles.title}>Recent search</Text>
                <TouchableOpacity style={styles.seeAll}>
                    <Text style={styles.text}>CLEAR ALL</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    history.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{ name: 'history' }}
                            onPress={() => props.navigation.navigate(screenName.resultScreen)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {

    },

    header: {
        marginHorizontal: 10,
        marginVertical: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: 'normal',
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
