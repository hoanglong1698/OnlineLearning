import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Transcripts = (props) => {
    let data = props.route.params;
    var array = [];
    for (var i in data) {
        array.push(data[i]);
    }
    
    return (
        <View style={styles.container}>
            <Text>{array}</Text>
        </View>
    )
}

export default Transcripts

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})
