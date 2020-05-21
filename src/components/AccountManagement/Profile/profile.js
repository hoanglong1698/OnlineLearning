import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'

const Profile = () => {
    const list = [
        {
            title: 'Account',
            icon: 'av-timer'
        },
        {
            title: 'Subscription',
            icon: 'flight-takeoff'
        },
        {
            title: 'Communication Preferences',
            icon: 'access-point'
        },
        {
            title: 'Default caption language',
            icon: 'access-point'
        },
        {
            title: 'Require Wi-fi for streaming',
            icon: 'flight-takeoff'
        },

    ]

    return (
        <TouchableOpacity>
            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        //leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                        
                    />
                ))
            }
        </TouchableOpacity>
    )
}

export default Profile
