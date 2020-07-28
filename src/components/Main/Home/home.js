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
        ContinueLearning: [],
        Favorites: [],
        TopNew: [],
        TopSell: [],
        TopRate: [],
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
            }),
            axios.post('https://api.itedu.me​/course/top-new', {
                limit: 10,
                page: 1
            }),
            axios.post('https://api.itedu.me​/course/top-sell', {
                limit: 20,
                page: 1
            }),
        ])
            .then(axios.spread(function (resContinueLearning, resFavorites, resTopNew, resTopSell) {
                setState({
                    ContinueLearning: resContinueLearning.data.payload,
                    Favorites: resFavorites.data.payload,
                    TopNew: resTopNew.data.payload,
                    TopSell: resTopSell.data.payload,
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
            {state.ContinueLearning.length != 0 && <SectionCourses title='Khóa học đang học' navigation={props.navigation} data={state.ContinueLearning} />}
            {state.Favorites.length != 0 && <SectionCourses title='Khóa học yêu thích' navigation={props.navigation} data={state.Favorites} />}
            <SectionCourses title='Khóa học mới nhất' navigation={props.navigation} data={state.TopNew} />
            {state.ContinueLearning.length == 0 && state.Favorites.length == 0 && <SectionCourses title='Khóa học bán nhiều nhất' navigation={props.navigation} data={state.TopNew} />}
            <SectionAuthors title='Giảng viên' />
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