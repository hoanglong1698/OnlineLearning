import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color } from './../../../globals/constants';

const GeneralInfomation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Beginner {`\u00B7`} May 20 2020 {`\u00B7`} 30h </Text>
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
