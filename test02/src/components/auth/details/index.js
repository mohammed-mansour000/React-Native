import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { login, register } from '../../../redux/actions'
import styles from './style'

export default function AuthDetails({ authPage, setdetailsPage }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login(email, password))
        .then((result) => {
            // console.log(result);
        }).catch((err) => {
            // console.log(err);
        });
    }
    const handleRegister = () => {
        dispatch(register(email, password))
        .then((result) => {
            // console.log(result);
        }).catch((err) => {
            // console.log(err);
        });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setdetailsPage(false)}
            >
                <Icon size={20} color="black" name="arrow-left" />
            </TouchableOpacity>
            <TextInput 
                onChangeText={(val) => setEmail(val)}
                placeholder="Email"
                style={styles.textInput}
            />
            <TextInput 
                onChangeText={(val) => setPassword(val)}
                placeholder="Password"
                secureTextEntry
                style={styles.textInput}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => authPage == 0 ? handleLogin() : handleRegister()}
            >
                <Text style={styles.buttonText}>
                    {
                        authPage == 0 ? 'Sign in' : 'Sign up'
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}
