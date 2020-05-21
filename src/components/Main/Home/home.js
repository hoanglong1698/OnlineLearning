import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';
import { color } from './../../../globals/constants';
import SectionAuthors from './SectionAuthors/section-authors';

const Home = (props) => {
    const onPressNewLease = () => {
        console.log('Press on NEW LEASE button')
    }

    return <ScrollView style={styles.container}>
        <ImageButton title="NEW RELEASES" onPress={onPressNewLease}/>

        <SectionCourses title='Continue learning' />
        <SectionCourses title='Path' />
        <SectionCourses title='Channels' />
        <SectionCourses title='Bookmarks' />

        <SectionAuthors title='Author' />
    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.mainBackgroundColor
    }
})

export default Home;