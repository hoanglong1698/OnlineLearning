import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';

const SearchBarView = () => {
    return (
            <SearchBar
                placeholder="Type Here..."
                clearIcon
                platform='default'
                lightTheme={true}
            />
    )
}

export default SearchBarView

const styles = StyleSheet.create({})
