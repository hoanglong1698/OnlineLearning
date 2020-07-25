import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import { color } from './../../../globals/constants';
import SectionAuthors from './SectionAuthors/section-authors';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const Home = (props) => {
    const { theme } = useContext(ThemeContext)
    const authContext = useContext(AuthenticationContext);

    const [state, setState] = useState({
        ContinueLearning: null,
        Favorites: null,
        TopSell: null,
        TopRate: null,
    });

    const [IsLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const GetData = () => {
        axios.all([
            axios.get('https://api.itedu.me​/user/get-process-courses', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authContext.state.token
                },
            }),
            axios.get('https://api.itedu.me/user/get-favorite-courses', {
                headers: {
                    'Authorization': 'Bearer ' + authContext.state.token
                }
            })
        ])
            .then(axios.spread(function (resContinueLearning, resFavorites) {
                setState({
                    ContinueLearning: resContinueLearning.data.payload,
                    Favorites: resFavorites.data.payload
                });
            }))
            .catch(function (error) {
                return (error);
            })
            .then(function () {
                setIsLoading(false);
                setRefreshing(false);
            });

    };

    const onRefresh = () => {
        setRefreshing(true);
        GetData();
    }

    useEffect(GetData, []);

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/17/19/08/hyacinth-1398839_960_720.jpg' }}></Image>
            {IsLoading === true && <ActivityIndicator size="large" />}
            {state.ContinueLearning != null && <SectionCourses title='Khóa học đang học' navigation={props.navigation} data={state.ContinueLearning} />}
            {state.Favorites != null && <SectionCourses title='Khóa học yêu thích' navigation={props.navigation} data={state.Favorites} />}
            <SectionAuthors title='Author' />
        </ScrollView>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.mainBackgroundColor
    },
    image: {
        width: '100%',
        height: 100,
    }
})

export default Home;