import React, { useState } from 'react'
import { StyleSheet, Text, View, Picker, ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import ListCourses from './../../Courses/ListCourses/list-courses';
import axios from 'axios';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [selectedValue, setSelectedValue] = useState("new");
    const [data, setData] = useState();
    const [resultCount, setResultCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const updateSearch = (string) => {
        setSearch({ string });
    };

    const onEndEditing = () => {
        setIsLoading(true);

        axios.post('https://api.itedu.me​/course/search', {
            keyword: search.string,
            limit: 20,
            offset: 0
        })
            .then(function (response) {
                setData(response.data.payload.rows)
                setResultCount(response.data.payload.count)
                setIsLoading(false);
                setIsLoaded(true);
            })
            .catch(function (error) {
                setIsLoading(false);
                return (error);
            });
    }

    const pickerChange = () => {
        setData(null);
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Type Here..."
                clearIcon
                platform='default'
                lightTheme={true}
                onChangeText={updateSearch}
                value={search}
                onEndEditing={onEndEditing}
            />

            {isLoading === true && <ActivityIndicator size="large" />}
            {isLoaded === true &&
                <View style={styles.result}>
                    <View style={styles.sort}>
                        <Text style={styles.resultCount}>{resultCount} kết quả</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectedValue(itemValue);
                                pickerChange();
                            }}
                            mode={'dropdown'}
                        >
                            <Picker.Item label="Relevance" value="rel" />
                            <Picker.Item label="Newest" value="new" />
                        </Picker>
                    </View>

                    <ListCourses navigation={props.navigation} data={data}></ListCourses>
                </View>
            }
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    resultCount: {
        fontSize: 14,
        marginVertical: 15,
        marginLeft: 10,
        color: color.headerText,
    },
    sort: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    result: {
        flex: 1,
        marginBottom: 49,
    },
    picker: {
        height: 20,
        width: 140,
        color: color.headerText,
    }
})
