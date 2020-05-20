import React from 'react'
import { View, Text, Button } from 'react-native'

const CoursesDetail = (props) => {
    let item = props.route.params.item

    return (
        <View>
            <Text>This is courses detail screen</Text>

            <Text>{`${item.title} - ${item.author}` }</Text>

            <Button onPress={() => {
                props.navigation.push("CoursesDetail");
            }}
                title="Go to relevant courses"
            />

            <Button onPress={() => {
                props.navigation.navigate("ListCourses");

            }} title="Back"
            />

            <Button onPress={() => {
                props.navigation.goBack();

            }} title="Go back"
            />

            <Button onPress={() => {
                props.navigation.popToTop();

            }} title="Pop to top"
            />
        </View>
    )
}

export default CoursesDetail
