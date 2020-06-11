import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Transcripts = (props) => {
    return (
        <View style={styles.container}>
            <Text>Hello. The quick brown fox jumps over the lazy dog</Text>
        </View>
    )
}

export default Transcripts

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})
