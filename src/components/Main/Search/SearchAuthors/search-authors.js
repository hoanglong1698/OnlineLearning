import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { ScrollView } from 'react-native-gesture-handler';

const SearchAuthors = (props) => {
    const authors = [
        {
            name: 'Gorden Ramsay',
            quantity: '10 courses',
        },

        {
            name: 'Lam Thi Phuong My',
            quantity: '25 courses',
        },

        {
            name: 'Hoang Long Nguyen',
            quantity: '5 courses',
        },

        {
            name: 'Tran Van An',
            quantity: '12 courses',
        },
        {
            name: 'Tran Van An',
            quantity: '12 courses',
        },
        {
            name: 'Tran Van An',
            quantity: '12 courses',
        },
        {
            name: 'Tran Van An',
            quantity: '12 courses',
        },
        {
            name: 'Tran Van An',
            quantity: '12 courses',
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.resultCount}>{authors.length} result</Text>
            <ScrollView>
                <TouchableOpacity>
                    {
                        authors.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.name}
                                titleStyle={{ color: color.headerText, }}
                                leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                                subtitle={item.quantity}
                                bottomDivider
                            />
                        ))
                    }
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default SearchAuthors

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    resultCount: {
        fontSize: 14,
        marginVertical: 15,
        marginLeft: 10,
    }
})
