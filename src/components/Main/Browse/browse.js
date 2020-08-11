import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { color, screenName } from './../../../globals/constants';
import ImageButton from './../../Common/image-button';
import SectionAuthors from './../Home/SectionAuthors/section-authors';
import SectionCourses from './../Home/SectionCourses/section-courses';
import CategoryButton from '../../Common/category-button';
import { ThemeContext } from '../../../provider/theme-provider';
import axios from 'axios';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { GetNewRelease } from './../../../core/services/courses-services';


const Browse = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext);

    const [state, setState] = useState({
        TopSell: null,
        TopRate: null,
        Web: null,
    });

    const [IsLoading, setIsLoading] = useState(true);

    const onPressNewRelease = () => {
        GetNewRelease().then(result => props.navigation.navigate(screenName.listCoursesScreen, { data: result, title: "New Release" }))
        //props.navigation.navigate(screenName.listCoursesScreen, { data: response.data.payload, title: "New Release" });
        // axios.post('https://api.itedu.me​/course/top-new', {
        //     limit: 10,
        //     page: 1
        // })
        //     .then(function (response) {
        //         props.navigation.navigate(screenName.listCoursesScreen, { data: response.data.payload, title: "New Release" });
        //     })
        //     .catch(function (error) {
        //         return (error);
        //     });

    }

    const onPressRecommended = () => {
        var url = 'https://api.itedu.me​/user/recommend-course/' + authContext.state.userInfo.id + '/20/0';
        axios.get(url)
            .then(function (response) {
                props.navigation.navigate(screenName.listCoursesScreen, { data: response.data.payload, title: "Recommended" })
            })
            .catch(function (error) {
                return (error);
            });
    }

    const onPressCategoryButton = (id, categoryName) => {
        axios.post('https://api.itedu.me​/course/search', {
            keyword: "",
            opt: {
                category: [id]
            },
            limit: 10,
            offset: 0
        })
            .then(function (response) {
                props.navigation.navigate(screenName.listCoursesScreen, { data: response.data.payload.rows, title: categoryName });
            })
            .catch(function (error) {
                return (error);
            });
    }

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

        <View style={styles.category}>
            <CategoryButton
                title="Lập trình Web"
                sourceImage="https://sogo.edu.vn/wp-content/uploads/2019/04/lap-trinh-web.jpg"
                onPress={() => { onPressCategoryButton("4eb0c150-8212-44ef-a90b-fcd40130ac01", "Lập trình Web") }}
            />
            <CategoryButton
                title="Lập trình Mobile"
                sourceImage="https://www.stimes.qa/wp-content/uploads/2019/04/mobile-app-development-technologies.png"
                onPress={() => { onPressCategoryButton("847dce36-f43b-4714-982d-e65812b40b5e", "Lập trình Mobile") }}
            />
        </View>
        <View style={styles.category}>
            <CategoryButton
                title="Lập trình Windows"
                sourceImage="https://congngheviet.com/wp-content/uploads/2018/10/mswindows2_2040.0.0.jpg"
                onPress={() => { onPressCategoryButton("eaa881b9-def6-429b-94e2-27b466862bc0", "Lập trình Windows") }}
            />
            <CategoryButton
                title="Lập trình Game"
                sourceImage="https://blog.gnt.com.vn/wp-content/uploads/2019/04/How-to-get-start-game-development-compan-1024x576.png"
                onPress={() => { onPressCategoryButton('a4015252-542a-4482-b087-4cfa85f2b953', "Lập trình Game") }}
            />
        </View>

        <View style={styles.category}>
            <CategoryButton
                title="Cơ sở dữ liệu"
                sourceImage="https://www.appilab.com/img/database-new-image.png"
                onPress={() => { onPressCategoryButton('edbc17da-ef55-4e83-a028-ba9657600f0b', "Cơ sở dữ liệu") }}
            />
            <CategoryButton
                title="Testing"
                sourceImage="https://topdev.vn/blog/wp-content/uploads/2017/09/usertesting.jpg"
                onPress={() => { onPressCategoryButton('93959023-5ff2-4bb8-beb2-c42dbe3dc2dd', "Testing") }}
            />
        </View>
        <View style={styles.category}>
            <CategoryButton
                title="Quản lý dự án"
                sourceImage="https://www.whizlabs.com/blog/wp-content/uploads/2019/01/role-of-project-manager.png"
                onPress={() => { onPressCategoryButton('8d919542-d44d-444c-8623-4d9c4063ed82', "Quản lý dự án") }}
            />
            <CategoryButton
                title="Đồ họa"
                sourceImage="https://arena.fpt.edu.vn/wp-content/uploads/2018/12/4Iz9oqQ.jpg"
                onPress={() => { onPressCategoryButton('b8a345df-3b8e-4a4f-b592-6c6c2f230fdc', "Đồ họa") }}
            />
        </View>


        <SectionCourses title='Khóa học bán nhiều nhất' navigation={props.navigation} data={state.TopSell} />
        <SectionCourses title='Khóa học đánh giá cao nhất' navigation={props.navigation} data={state.TopRate} />

        <SectionAuthors title='Giảng viên' />
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