import { useNavigation, StackActions } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';

export default function SavePostScreen(props) {
    // console.log(props.route.params.source);
    const navigation = useNavigation();
    const [description, setDescription] = useState('');
    const [requestRunning, setRequestRunning] = useState(false)

    const dispatch = useDispatch();
    const handleSavePost = () => {
        setRequestRunning(true);
        dispatch(createPost(description, props.route.params.source, props.route.params.sourceThumb))
        .then((res) => {
            console.log("from save post", res);
            navigation.dispatch(StackActions.popToTop())
            // navigation.goBack()
        }).catch((err) => {
            console.log("error form save post",err);
            setRequestRunning(false);
        });
    }

    if(requestRunning){
        return (
            <View style={{flex: 1 ,justifyContent: 'center'}}>
                <ActivityIndicator color="red" size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput 
                    onChangeText={(text) => setDescription(text)}
                    multiline
                    maxLength={150}
                    style={styles.inputText}
                    placeholder="Describe your videos"
                />
                <Image
                    style={styles.mediaPreview} 
                    source={{ uri: props.route.params.source }}
                />
            </View>

            <View style={styles.spacer}/>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.cancelButton}
                >
                    <Icon name="times" size={24} color="black" />
                    <Text style={styles.cancelButtonText}> Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}
                >
                    <Icon name="paper-plane" size={24} color="white" />
                    <Text style={styles.postButtonText}> Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
