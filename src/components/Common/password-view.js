import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const PasswordView = (props) => {
    return (
        <View style={styles.passwordView} >
            <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#a1a1a1"
            //onChangeText={text => this.setState({ email: text })} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    passwordView: {
        width: "80%",
        borderRadius: 25,
        borderBottomColor: '#a1a1a1',
        borderBottomWidth: 1,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        paddingLeft: 20,
        paddingTop: 15,
    },

    inputText: {
        height: 50,
        color: "#2c3051"
    },
})

export default PasswordView
