import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { ListItem } from 'react-native-elements'
import { color } from './../../../../globals/constants';
import { paths } from '../../../../globals/database';

const SearchPaths = () => {
    const thumbnail = () => {
        return <Image style={styles.thumbnail}
            source={require('../../../../../assets/icon-course.png')}>
        </Image>
    }

    const onPressTest = () =>
        console.log('clicked')

    return (
        <View style={styles.container}>
            <Text style={styles.resultCount}>{paths.length} result</Text>
            <ScrollView>
                {
                    paths.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            titleStyle={{ color: color.headerText, }}
                            leftElement={() => thumbnail()}
                            subtitle={item.quantity}
                            bottomDivider
                            onPress={onPressTest}
                        />
                    ))
                }
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
        width: 90,
        height: 60,
    },
})
