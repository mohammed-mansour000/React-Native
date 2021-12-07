import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';

export default function CameraScreen() {
    const [hasCameraPermisions, setHasCameraPermisions] = useState(false);
    const [hasAudioPermisions, setHasAudioPermisions] = useState(false);
    const [hasGalleryPermisions, setHasGalleryPermisions] = useState(false);

    useEffect(() => {
        (async () => {
            // const cameraStatus = await Camera.requestPermissionsAsync();
            // setHasCameraPermisions(cameraStatus.granted == 'granted');

            // const audioStatus = await Audio.requestPermissionsAsync();
            // setHasAudioPermisions(audioStatus.granted == 'granted');
            
            // const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            // setHasGalleryPermisions(galleryStatus.granted == 'granted');
            if (await Camera.isAvailableAsync()) {
                console.log("camera")
            }else{
                console.log("no camera")
            }
            
        })()
    }, []);

    return (
        <View style={{paddingTop: 40}}>
            <Text>Camera Screen</Text>
        </View>
    )
}
