import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';

const SearchBarView = () => {
    return (
        <View>
            <SearchBar
                placeholder="Type Here..."
                clearIcon
                platform='default'
                lightTheme={true}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})
