import React from 'react';
import { View, ScrollView } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';

const Home = (props) => {
    const onPressNewLease = () => {
        console.log('Press on NEW LEASE button')
    }

    return <ScrollView>
        <ImageButton title='NEW RELEASES' onPress={onPressNewLease}/>

        <SectionCourses title='Continue learning' />
        <SectionCourses title='Path' />
        <SectionCourses title='Channels' />
        <SectionCourses title='Bookmarks' />
    </ScrollView>
};



export default Home;