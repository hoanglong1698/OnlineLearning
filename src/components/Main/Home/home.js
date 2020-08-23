import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';
import { color } from './../../../globals/constants';
import SectionAuthors from './SectionAuthors/section-authors';
import SectionPaths from './SectionPaths/section-paths';

const Home = (props) => {
    const onPressNewLease = () => {
        console.log('Press on NEW LEASE button')
    }

    return <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2016/05/17/19/08/hyacinth-1398839_960_720.jpg'}}></Image>
        <SectionCourses title='Continue learning' />
        <SectionPaths title='Path' />
        <SectionCourses title='Course List' />
        <SectionAuthors title='Author' />
    </ScrollView>
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