import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import { color } from './../../../globals/constants';
import SectionAuthors from './SectionAuthors/section-authors';
import SectionPaths from './SectionPaths/section-paths';
import { continueLearning, bookmarks } from './../../../globals/database';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import axios from 'axios';

const Home = (props) => {
    const [state, setState] = useState({
        ContinueLearning: null,
        Favorites: null,
        TopSell: null,
        TopRate: null,
    });

    const [IsLoading, setIsLoading] = useState(true);
    const { theme } = useContext(ThemeContext)
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        axios.all([
            axios.get('https://api.itedu.me​/user/get-process-courses', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authContext.state.token
                },
            }),
        ])
            .then(axios.spread(function (resContinueLearning) {
                setState({
                    ContinueLearning: resContinueLearning.data.payload,
                });
                setIsLoading(false);
            }))

            .catch(function (error) {
                return (error);
            });

    }, [])

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/17/19/08/hyacinth-1398839_960_720.jpg' }}></Image>
            {IsLoading === true && <ActivityIndicator size="large" />}
            <SectionCourses title='Khóa học đang học' navigation={props.navigation} data={state.ContinueLearning} />
            <SectionCourses title='Khóa học yêu thích' navigation={props.navigation} data={bookmarks} />
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