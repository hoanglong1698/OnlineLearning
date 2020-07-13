import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { color, screenName } from './../../../globals/constants';
import ImageButton from './../../Common/image-button';
import SectionPaths from './../Home/SectionPaths/section-paths';
import SectionAuthors from './../Home/SectionAuthors/section-authors';
import SectionCourses from './../Home/SectionCourses/section-courses';
import CategoryButton from '../../Common/category-button';
import { newRelease, recommended } from '../../../globals/database';
import { bookmarks } from './../../../globals/database';
import { ThemeContext } from '../../../provider/theme-provider';

const Browse = (props) => {
    
    const onPressNewLease = () => {
        

        props.navigation.navigate(screenName.listCoursesScreen, { data: newRelease, title: "New Release" });
    }

    const onPressRecommended = () => {
        props.navigation.navigate(screenName.listCoursesScreen, { data: recommended, title: "Recommended" })
    }

    const { theme } = useContext(ThemeContext);

    return <ScrollView style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
        <ImageButton
            title="NEW RELEASES"
            onPress={onPressNewLease}
            sourceImage="https://cdn.pixabay.com/photo/2020/01/14/16/26/lavender-4765498_960_720.jpg"
        />
        <ImageButton
            title="RECOMMENDED"
            onPress={onPressRecommended}
            sourceImage="https://cdn.pixabay.com/photo/2020/05/30/01/49/sea-5237374_960_720.jpg"
        />

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton
                title="IT"
                sourceImage="https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_960_720.jpg"
            />
            <CategoryButton
                title="Machine Learning"
                sourceImage="https://office-softech.cdn.vccloud.vn/ckfinder/userfiles//files/T%E1%BA%A0I%20SAO%20l%E1%BA%A1i%20s%E1%BB%AD%20d%E1%BB%A5ng%20PYTHON%20cho%20AI%20v%C3%A0%20Machine%20Learning.png"
            />
            <CategoryButton
                title="AI"
                sourceImage="https://www.brandsvietnam.com/upload/forum2/2019/09/nhan_dien_khuon_mat_1568970929.jpeg"
            />
        </ScrollView>

        <ScrollView style={styles.category} horizontal={true}>
            <CategoryButton
                title="Business"
                sourceImage="https://www.companyformation24.com/wp-content/uploads/2020/03/business-meeting-with-iPad-1.jpg"
            />
            <CategoryButton
                title="Design"
                sourceImage="https://advertisingvietnam.com/wp-content/uploads/2019/11/Designer1.jpg"
            />
            <CategoryButton
                title="Architecture"
                sourceImage="https://www.ndesconstruction.com/images/architecture-design/1.jpg"
            />
        </ScrollView>


        <SectionCourses title='Popular courses' data={bookmarks} />
        <SectionPaths title='Path' />
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