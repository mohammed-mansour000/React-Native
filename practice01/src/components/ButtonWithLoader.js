import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function ButtonWithLoader({
    text
}) {
  return (
    <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        borderWidth: 1,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
})