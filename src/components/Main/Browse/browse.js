import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { color } from './../../../globals/constants';
import ImageButton from './../../Common/image-button';
import SectionPaths from './../Home/SectionPaths/section-paths';
import SectionAuthors from './../Home/SectionAuthors/section-authors';
import SectionCourses from './../Home/SectionCourses/section-courses';
import CategoryButton from '../../Common/category-button';

const Browse = (props) => {
    const onPressNewLease = () => {
        console.log('Press on NEW LEASE button')
    }

    return <ScrollView style={styles.container}>
        <ImageButton title="NEW RELEASES" onPress={onPressNewLease} />
        <ImageButton title="RECOMMENDED" onPress={onPressNewLease} />

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton title="IT"></CategoryButton>
            <CategoryButton title="Machine Learning"></CategoryButton>
            <CategoryButton title="AI"></CategoryButton>
        </ScrollView>

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton title="Business"></CategoryButton>
            <CategoryButton title="Design"></CategoryButton>
            <CategoryButton title="Architecture"></CategoryButton>
        </ScrollView>


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
    category: {
        flexDirection: 'row',
    }
})

export default Browse;