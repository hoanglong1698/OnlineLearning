import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { color } from '../../../globals/constants';
import ListCourses from '../../Courses/ListCourses/list-courses';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const Favorites = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext)
    const [data, setData] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.itedu.me/user/get-favorite-courses', {
            headers: {
                'Authorization': 'Bearer ' + authContext.state.token
            }
        })
            .then(function (response) {
                setData(response.data.payload);
                setIsLoading(false);
            })
            .catch(function (error) {
                return (error);
            });
    }, [])

    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            {IsLoading === true && <ActivityIndicator size="large" />}

            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        marginHorizontal: 10,
        marginVertical: 25,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
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
