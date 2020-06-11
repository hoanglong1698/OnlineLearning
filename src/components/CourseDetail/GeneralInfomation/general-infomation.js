import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color } from './../../../globals/constants';

const GeneralInfomation = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>{props.level} {`\u00B7`} {props.released} {`\u00B7`} {props.duration} </Text>
            <Rating style={styles.rating}
                defaultRating={4}
                type='custom'
                fractions={1}
                ratingCount={5}
                imageSize={12}
            />
        </View>
    )
}

export default GeneralInfomation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        
    },

    rating: {
        alignSelf: 'center',
        marginLeft: 10,
    }
})
