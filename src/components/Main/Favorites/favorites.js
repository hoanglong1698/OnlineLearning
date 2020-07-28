import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, RefreshControl, View } from 'react-native';
import { color } from '../../../globals/constants';
import ListCourses from '../../Courses/ListCourses/list-courses';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const Favorites = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext)
    const [data, setData] = useState(0);
    const [IsLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

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

    const onRefresh = () => {
        setRefreshing(true);
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
            })
            .then(function () {
                setRefreshing(false);
            });;
    }

    if (data.length == 0) {
        return (
            <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
                <Image source={require('../../../../assets/empty.png')}
                    style={styles.empty}
                />
                <Text style={styles.emptyText}>Bạn chưa thích khóa học nào!</Text>
            </View>
        )
    }

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {IsLoading === true && <ActivityIndicator size="large" />}

            <ListCourses navigation={props.navigation} data={data}></ListCourses>
        </ScrollView>
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
    },

    empty: {
        width: 100,
        height: 100,
    },
    emptyText: {
        fontSize: 20,
        marginTop: 10,
    }
})
