import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style'

export default function NavBarGeneral({ title='NavBarGeneral', leftButton={display: false} }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" size={24}/>
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => leftButton.display ? leftButton.action() : null}
            >
                <Icon name={leftButton.name} size={26} color={leftButton.display ? 'pink' : 'white'}/>
            </TouchableOpacity>
        </View>
    )
}
