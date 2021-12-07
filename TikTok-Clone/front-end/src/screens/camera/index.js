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
            const cameraStatus = await Camera.requestPermissionsAsync().catch(err => console.log(err));
            setHasCameraPermisions(cameraStatus.granted == 'granted');

            // const audioStatus = await Audio.requestPermissionsAsync().catch(err => console.log(err));
            // setHasAudioPermisions(audioStatus.granted == 'granted');
            
            // const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync().catch(err => console.log(err));
            // setHasGalleryPermisions(galleryStatus.granted == 'granted');

            
        })()
    }, []);

    return (
        <View style={{paddingTop: 40}}>
            <Text>Camera Screen</Text>
        </View>
    )
}
