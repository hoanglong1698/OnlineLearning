import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView } from 'react-native'
import axios from 'axios';
import ListCourses from './../../Courses/ListCourses/list-courses';
import { color } from './../../../globals/constants';
import { ThemeContext } from '../../../provider/theme-provider';

export default function AuthorDetail(props) {
    const { theme } = useContext(ThemeContext);
    const { id, title } = props.route.params;
    props.navigation.setOptions({ title: title });
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        let url = 'https://api.itedu.me​/instructor/detail/' + id;
        axios.get(url)
            .then(function (response) {
                setData(response.data.payload);
                setIsLoaded(true);
            })
            .catch(function (error) {
                return (error);
            })
            .then(function () {
                setIsLoading(false);
            });
    }, []);

    return (
        <ScrollView>
            {isLoading === true && <ActivityIndicator size="large" />}
            {isLoaded === true &&
                <View style={{ ...styles.container1, backgroundColor: theme.mainBackgroundColor }}>
                    <Image style={styles.thumbnail}
                        source={{ uri: data.avatar }}>
                    </Image>

                    <Text style={styles.header}>{data.name}</Text>

                    <View style={styles.containerIntro}>
                        <Text style={{ ...styles.headerIntro, color: theme.headerText }}>Thông tin</Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}>Email: {data.email}</Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}>Điện thoại: {data.phone}</Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}></Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}>Học viên: <Text style={{ fontWeight: 'bold' }}>{data.soldNumber}</Text></Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}>Tổng số khóa học: <Text style={{ fontWeight: 'bold' }}>{data.totalCourse}</Text></Text>
                    <Text style={{ ...styles.introduction, color: theme.headerText }}>Đánh giá: <Text style={{ fontWeight: 'bold' }}>{Math.round(data.averagePoint)}/5</Text> ({data.countRating} bình chọn)</Text>
                    </View>

                    <View style={styles.containerIntro}>
                        <Text style={{ ...styles.headerIntro, color: theme.headerText }}>Giới thiệu</Text>
                        <Text style={{ ...styles.introduction, color: theme.headerText }}>{data.intro}</Text>
                    </View>

                    <View style={styles.containerIntro}>
                        <Text style={{ ...styles.headerIntro, color: theme.headerText }}>Kỹ năng</Text>
                        {data.skills.map((item) => <Text style={{ ...styles.introduction, color: theme.headerText }}>{`\u2713`}  {item}</Text>)}
                    </View>

                    <Text style={styles.header}>Khóa học dạy bởi {data.name}</Text>
                </View>}
            {isLoaded === true && <ListCourses navigation={props.navigation} data={data.courses}></ListCourses>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        margin: 10,
    },

    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: color.headerText
    },

    containerIntro: {
        marginBottom: 20,
    },

    headerIntro: {
        color: color.headerText,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
    },

    introduction: {
        fontSize: 14,
        color: color.headerText,
        textAlign: 'left',
        marginBottom: 2,
    },
})
