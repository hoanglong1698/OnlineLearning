import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-elements';
import { color } from './../../../globals/constants';
import moment from 'moment';
import { ThemeContext } from '../../../provider/theme-provider';
import i18n from './../../../../utils/i18n';

function formatDuration(num) {
    return moment().startOf('day').add(num, 'hours').format('H:mm:ss')
}

function formatPrice(price) {
    if (price === 0) {
        return i18n.t("Free");
    }
    else {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' VND';
    }
}

const GeneralInfomation = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={{ ...styles.info, color: theme.headerText }}>{props.soldNumber} {i18n.t("Student")}  {`\u00B7`}  {i18n.t("Duration")} {formatDuration(props.duration)}  {`\u00B7`}  </Text>
                <Text style={styles.price}>{formatPrice(props.price)}</Text>
            </View>

            <View style={styles.ratingContainer}>
                <AirbnbRating
                    starContainerStyle={styles.rating}
                    count={5}
                    showRating={false}
                    defaultRating={props.averagePoint}
                    size={15}
                    isDisabled={true}
                />
                <Text style={{ marginLeft: 10, color: theme.headerText }}>{props.averagePoint}/5  <Text>({props.ratedNumber} {i18n.t("Ratings")})</Text></Text>
            </View>
        </View>
    )
}

export default GeneralInfomation

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    infoContainer: {
        flexDirection: 'row',
    },

    info: {
        fontSize: 15,
        color: color.headerText,
    },

    ratingContainer: {
        alignSelf: 'flex-start',
        marginTop: 10,
        flexDirection: 'row',
    },

    rating: {
        alignSelf: 'center',
    },

    price: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
