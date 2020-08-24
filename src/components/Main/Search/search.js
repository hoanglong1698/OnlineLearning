import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SearchBar, ListItem } from 'react-native-elements';
import { color, screenName } from './../../../globals/constants';
import axios from 'axios';
import { ThemeContext } from '../../../provider/theme-provider';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import i18n from './../../../../utils/i18n';

const Search = (props) => {
    const authContext = useContext(AuthenticationContext);
    const { theme } = useContext(ThemeContext)

    const [search, setSearch] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchHistory, setSearchHistory] = useState();

    const updateSearch = (string) => {
        setSearch({ string });
    };

    const renderItem = ({ item }) => (
        <ListItem
            key={item.id}
            title={item.content}
            leftElement={<MaterialCommunityIcons
                name='history'
                size={24}
                color={theme.headerText}
            />}
            bottomDivider
            containerStyle={{ backgroundColor: theme.itemBackgroundColor }}
            titleStyle={{ color: theme.headerText }}
            onPress={() => {
                props.navigation.navigate(screenName.resultScreen, { string: item.content })
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
                console.log("deleted");
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
                setIsLoaded(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [searchHistory]);

    return (
        <View style={{ ...styles.container, backgroundColor: theme.mainBackgroundColor }}>
            <SearchBar
                placeholder={i18n.t("PlaceHolderSearch")}
                clearIcon
                platform='default'
                lightTheme={theme.lightSeachBar}
                onChangeText={updateSearch}
                value={search}
                onEndEditing={() => props.navigation.navigate(screenName.resultScreen, search)}
            />
            {<View style={styles.header}>
                <Text style={{ ...styles.title, color: theme.headerText }}>{i18n.t("History")}</Text>
                {searchHistory != undefined && searchHistory == 0 && <Text style={{ marginTop: 20, textAlign: 'center' }}>Không có dữ liệu</Text>}
            </View>}

            {isLoaded === true && <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={searchHistory}
                renderItem={renderItem}
            />}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
})
