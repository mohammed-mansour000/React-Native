import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'
import NavBarGeneral from '../../../components/general/navbar'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style'
import * as ImagePicker from 'expo-image-picker';
import { saveUserProfileImage } from '../../../../services/user';
import { useNavigation } from '@react-navigation/core';

export default function EditProfileScreen() {
    //get current user from auth reducer
    const currentUser = useSelector(state => state.auth.currentUser)
    const navigation = useNavigation();

    const chooseImage = async () => {
         // allow to open gallery and pick an image or video from gallery
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        // if item was selected
        if(!result.cancelled){
            saveUserProfileImage(result.uri)
            .then((result) => {console.log(result)})
            .catch((err) => {console.log(err)});
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <NavBarGeneral title="Edit Profile"/>
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    style={styles.imageViewContainer}
                    onPress={() => chooseImage()}
                >
                    <Image
                        style={styles.image} 
                        source={{ uri: currentUser.photoURL }} //set our profile image
                    />
                    <View style={styles.imageOverLay} />
                    <Icon name="camera" size={24} color="white" style={{opacity: 0.7}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.fieldsContainer}>
                <TouchableOpacity
                    style={styles.fieldItemContainer}
                    onPress={() => navigation.navigate(
                                "editProfileField", 
                                { title: "Display Name", field: "displayName", value: currentUser.displayName }
                            )}
                >
                    <Text>Display Name</Text>
                    <View
                        style={styles.fieldValueContainer}
                    > 
                        <Text>{currentUser.displayName} </Text>
                        <Icon name="chevron-right" size={20} color="gray" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
