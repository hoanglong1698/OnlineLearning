import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';

const SearchPaths = () => {
    const paths = [
        {
            name: 'React',
            quantity: '10 courses',
        },

        {
            name: 'Microsoft Ignite 2019',
            quantity: '5 courses',
        },
    ]

    const thumbnail = () => {
        return <Image style={styles.thumbnail}
            source={require('../../../../../assets/icon-course.png')}>
        </Image>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.resultCount}>{paths.length} result</Text>
            <ScrollView>
                <TouchableOpacity>
                    {
                        paths.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.name}
                                titleStyle={{ color: color.headerText, }}
                                leftElement={() => thumbnail()}
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

export default SearchPaths

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    resultCount: {
        fontSize: 14,
        marginVertical: 15,
        marginLeft: 10,
    },
    thumbnail: {
        width: 100,
        height: 70,
    },
})
