import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { screenName } from '../../../../globals/constants';

const SearchBarView = (props) => {
    const [state, setState] = useState('');

    const updateSearch = (search) => {
        setState({ search });
    };

    const onEndEditing = () => {
        props.navigation.navigate(screenName.resultScreen)
    }

    return (
        <SearchBar
            placeholder="Type Here..."
            clearIcon
            platform='default'
            lightTheme
            onChangeText={updateSearch}
            value={state}
            onEndEditing={onEndEditing}
        />
    )
}

export default SearchBarView

const styles = StyleSheet.create({})
