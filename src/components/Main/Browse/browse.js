import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { color, screenName } from './../../../globals/constants';
import ImageButton from './../../Common/image-button';
import SectionAuthors from './../Home/SectionAuthors/section-authors';
import SectionCourses from './../Home/SectionCourses/section-courses';
import CategoryButton from '../../Common/category-button';
import { recommended } from '../../../globals/database';
import { ThemeContext } from '../../../provider/theme-provider';
import axios from 'axios';

const Browse = (props) => {
    const [state, setState] = useState({
        NewRelease: null,
        Recommended: null,
        TopSell: null,
        TopRate: null,
    });
    const [IsLoading, setIsLoading] = useState(true);

    const onPressNewRelease = () => {
        axios.post('https://api.itedu.me​/course/top-new', {
            limit: 10,
            page: 1
        })
            .then(function (response) {
                setState({
                    NewRelease: response.data.payload,
                })
            })
            .catch(function (error) {
                return (error);
            });
        props.navigation.navigate(screenName.listCoursesScreen, { data: state.NewRelease, title: "New Release" });
    }

    const onPressRecommended = () => {
        props.navigation.navigate(screenName.listCoursesScreen, { data: recommended, title: "Recommended" })
    }

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        axios.all([
            axios.post('https://api.itedu.me​/course/top-sell', {
                limit: 20,
                page: 1
            }),
            axios.post('https://api.itedu.me​/course/top-rate', {
                limit: 20,
                page: 1
            }),
        ])
            .then(axios.spread(function (resTopSell, resTopRate) {
                setState({
                    TopSell: resTopSell.data.payload,
                    TopRate: resTopRate.data.payload,
                });
                setIsLoading(false);
            }))

            .catch(function (error) {
                return (error);
            });

    }, [])

    return <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
        {IsLoading === true && <ActivityIndicator size="large" />}
        
        <ImageButton
            title="KHÓA HỌC MỚI NHẤT"
            onPress={onPressNewRelease}
            sourceImage="https://cdn.pixabay.com/photo/2020/01/14/16/26/lavender-4765498_960_720.jpg"
        />
        <ImageButton
            title="KHÓA HỌC DÀNH CHO BẠN"
            onPress={onPressRecommended}
            sourceImage="https://cdn.pixabay.com/photo/2020/05/30/01/49/sea-5237374_960_720.jpg"
        />

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton
                title="Lập trình Web"
                sourceImage="https://sogo.edu.vn/wp-content/uploads/2019/04/lap-trinh-web.jpg"
            />
            <CategoryButton
                title="Lập trình Mobile"
                sourceImage="https://www.stimes.qa/wp-content/uploads/2019/04/mobile-app-development-technologies.png"
            />
            <CategoryButton
                title="Lập trình Windows"
                sourceImage="https://congngheviet.com/wp-content/uploads/2018/10/mswindows2_2040.0.0.jpg"
            />
            <CategoryButton
                title="Lập trình game"
                sourceImage="https://blog.gnt.com.vn/wp-content/uploads/2019/04/How-to-get-start-game-development-compan-1024x576.png"
            />
        </ScrollView>

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton
                title="Cơ sở dữ liệu"
                sourceImage="https://www.appilab.com/img/database-new-image.png"
            />
            <CategoryButton
                title="Testing"
                sourceImage="https://topdev.vn/blog/wp-content/uploads/2017/09/usertesting.jpg"
            />
            <CategoryButton
                title="Quản lý dự án"
                sourceImage="https://www.whizlabs.com/blog/wp-content/uploads/2019/01/role-of-project-manager.png"
            />
            <CategoryButton
                title="Đồ họa"
                sourceImage="https://arena.fpt.edu.vn/wp-content/uploads/2018/12/4Iz9oqQ.jpg"
            />
        </ScrollView>


        <SectionCourses title='Khóa học bán nhiều nhất' navigation={props.navigation} data={state.TopSell} />
        <SectionCourses title='Khóa học đánh giá cao nhất' navigation={props.navigation} data={state.TopRate} />

        <SectionAuthors title='Top Author' />
    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.mainBackgroundColor
    },
    category: {
        flexDirection: 'row',
    }
})

export default Browse;