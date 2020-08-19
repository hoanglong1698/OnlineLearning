import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Picker, ActivityIndicator, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { SearchBar, ListItem } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import ListCourses from './../../Courses/ListCourses/list-courses';
import axios from 'axios';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Search = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext)

    const [search, setSearch] = useState('');
    const [selectedValue, setSelectedValue] = useState("new");
    const [data, setData] = useState();
    const [resultCount, setResultCount] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchHistory, setSearchHistory] = useState();

    const updateSearch = (string) => {
        setSearch({ string });
    };

    const onEndEditing = () => {
        setIsLoading(true);
        setShowResult(true);
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

    const renderItem = ({ item }) => (
        <ListItem
            key={item.id}
            title={item.content}
            leftIcon={{ name: 'history' }}
            bottomDivider
            onPress={() => {
                // updateSearch(item.title);
                // onEndEditing();
            }}
            rightElement={<MaterialCommunityIcons
                name='close'
                size={24}
                onPress={() => DeleteHistory(item.id)}
                color={theme.infoTextColor}
            />}
        />
    )

    const DeleteHistory = (id) => {
        let url = 'https://api.itedu.me/course/delete-search-history/' + id
        axios.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + authContext.state.token
            }
        })
            .then(function (response) {
                setSearchHistory({ ...searchHistory, });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        axios.get('https://api.itedu.me/course/search-history', {
            headers: {
                'Authorization': 'Bearer ' + authContext.state.token
            }
        })
            .then(function (response) {
                setSearchHistory(response.data.payload.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [searchHistory]);

    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <SearchBar
                placeholder="Tìm kiếm..."
                clearIcon
                platform='default'
                lightTheme={theme.lightSeachBar}
                onChangeText={updateSearch}
                value={search}
                onEndEditing={onEndEditing}
                onFocus={() => setShowResult(false)}
            />
            {!showResult && <View style={styles.header}>
                <Text style={styles.title}>Lịch sử</Text>
                {!showResult && searchHistory != undefined && searchHistory == 0 && <Text style={{ marginTop: 20,textAlign: 'center'}}>Không có dữ liệu</Text>}
            </View>}

            {!showResult && searchHistory != undefined && <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={searchHistory}
                renderItem={renderItem}
            />}

            

            {isLoading === true && <ActivityIndicator size="large" />}
            {isLoaded === true && showResult &&
                <View style={styles.result}>
                    <View style={styles.sort}>
                        <Text style={{ ...styles.resultCount, color: theme.headerText }}>{resultCount} kết quả</Text>
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
    },
    picker: {
        height: 20,
        width: 140,
        color: color.headerText,
    },

    header: {
        marginHorizontal: 10,
        marginVertical: 10,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.headerText
    },

    seeAll: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 0,
        backgroundColor: color.seeAllButtonColor,
        borderRadius: 25,
        width: 100,
    },

    text: {
        fontSize: 14,
        color: color.seeAllTextColor,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
