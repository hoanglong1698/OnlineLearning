import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import { color } from './../../../globals/constants';
import SectionAuthors from './SectionAuthors/section-authors';
import SectionPaths from './SectionPaths/section-paths';
import { courses, continueLearning } from './../../../globals/database';
import { ThemeContext } from '../../../provider/theme-provider';
const Home = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/17/19/08/hyacinth-1398839_960_720.jpg' }}></Image>
            <SectionCourses title='Continue learning' navigation={props.navigation} data={continueLearning} />
            <SectionPaths title='Path' />
            <SectionCourses title='Course List' navigation={props.navigation} data={courses} />
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