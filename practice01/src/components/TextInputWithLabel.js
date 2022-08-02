import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function TextInputWithLabel({
    label,
    placeholder,
    value,
    inputStyle,
    textStyle,
    isSecure,
    onChangeText,
    ...props
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholderTextColor='gray'
        secureTextEntry={isSecure}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black',
        paddingHorizontal: 16,
        borderRadius: 5,
        marginBottom: 15
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})