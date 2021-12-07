import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ProfileNavbar({ user }) {
    console.log(user)
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon  name="search" size={20}/>  
            </TouchableOpacity>
            <Text style={styles.text}>{user.displayName}</Text>
            <TouchableOpacity>
                <Icon  name="bars" size={24}/>
            </TouchableOpacity>
        </View>
    )
}
