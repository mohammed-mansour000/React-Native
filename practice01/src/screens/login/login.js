import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonWithLoader from '../../components/ButtonWithLoader'

export default function Login({ navigation }) {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true
  })
  const { isLoading, email, password, isSecure } = state;
  const updateState = (data) => setState(() => ({...state, ...data}))

  return (
    <View style={styles.container}>
      <TextInputWithLabel 
        onChangeText={(e) => console.log("from login",e)}
        placeholder="enter your email"
        label="Email"
      />
      <TextInputWithLabel 
        onChangeText={(e) => console.log("from login",e)}
        placeholder="enter your password"
        label="Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
      />
      <ButtonWithLoader 
        text="button"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
  }
})
