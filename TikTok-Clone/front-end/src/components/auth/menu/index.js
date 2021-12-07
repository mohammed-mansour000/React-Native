import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function AuthMenu({ authPage, setAuthPage, detailsPage, setdetailsPage }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.headerText}>{authPage == 0 ? 'Sign in' : 'Sign up'}</Text>
                <TouchableOpacity 
                    style={styles.providerButton}
                    onPress={() => setdetailsPage(true)}
                    >
                    <Icon size={24} color="black" name="user" />
                    <Text style={styles.providerButtonText}>Use Email</Text>
                    <View />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.containerBottomButton}
                onPress={() => authPage == 0 ? setAuthPage(1) : setAuthPage(0)}
            >
                {
                    authPage == 0 ? 
                    <Text>Don't have an account? <Text style={styles.BottomButtonText}>Sign Up</Text></Text>
                    :
                    <Text>Already have an account? <Text style={styles.BottomButtonText}>Sign in</Text></Text>
                }
            </TouchableOpacity>
        </View>
    )
}
