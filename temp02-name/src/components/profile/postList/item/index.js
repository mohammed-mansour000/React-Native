import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default function ProfilePostListItem({ item }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.downloadUrl[1] }}/>
        </View>
    )
}
