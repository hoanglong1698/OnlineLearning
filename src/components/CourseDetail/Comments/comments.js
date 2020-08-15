import React, { useState } from 'react'
import { StyleSheet, Text, View, ProgressBarAndroid } from 'react-native'
import { color } from './../../../globals/constants';

const Comments = (props) => {
    console.log("hello", props.route.params.data);

    return (
        <View style={styles.container}>
            <Text></Text>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} color={color.headerBar} />
        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },

    averagePoint: {
        fontSize: 30,
    }
})
