import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'
import ListAuthorItem from './../ListAuthorItem/list-author-item';
import axios from 'axios';

export default function ListAuthors(props) {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('https://api.itedu.me​/instructor')
            .then(function (response) {
                setData(response.data.payload);
                setIsLoaded(true);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                setIsLoading(false);
            });
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: theme.mainBackgroundColor }}>
            {isLoading === true && <ActivityIndicator size="large" />}
            {isLoaded === true && <FlatList
                data={data}
                renderItem={({ item }) => <ListAuthorItem navigation={props.navigation} item={item} />}
                onEndReached={() => console.log("on end reached")}
                onEndReachedThreshold={0.5}
            />}
        </View>
    )
}

const styles = StyleSheet.create({})
