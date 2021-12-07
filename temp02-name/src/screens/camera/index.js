import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CameraScreen() {
    const [hasCameraPermisions, setHasCameraPermisions] = useState(false);
    const [hasAudioPermisions, setHasAudioPermisions] = useState(false);
    const [hasGalleryPermisions, setHasGalleryPermisions] = useState(false);
    const [galleryItems, setgalleryItems] = useState([]);
    const [cameraRef, setCameraRef] = useState(null);
    const [cameraType, setcameraType] = useState(Camera.Constants.Type.back);
    const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const isFocused = useIsFocused();
    
    // allows us to use navigation without passing props from component to another 
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermisions(cameraStatus.status === 'granted');

            const audioStatus = await Audio.requestPermissionsAsync();
            setHasAudioPermisions(audioStatus.status === 'granted');
            
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermisions(galleryStatus.status === 'granted');

            if(galleryStatus.status === 'granted'){
                const userGalleryMedia = await MediaLibrary.getAssetsAsync({
                    sortBy: ['creationTime'], 
                    mediaType: ['video']
                });
                // console.log(userGalleryMedia.assets[0].uri);
                // set the gallery items
                setgalleryItems(userGalleryMedia.assets);
            }
            
        })()
    }, []);

    const recordVideo = async () => {
        console.log("record started...")
        if(cameraRef){
            try {
                const options = { maxDuration: 60, quality: Camera.Constants.VideoQuality['480'] }
                const videoRecordPromise = cameraRef.recordAsync(options);
                if(videoRecordPromise) {
                    const data = await videoRecordPromise;
                    const source = data.uri
                    //add the thumbnail to the selected video
                    const sourceThumb = await generateThumbnail(source);
                    navigation.navigate('savePost', { source, sourceThumb });
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const stopVideo = async () => {
        console.log("record started...")
        if(cameraRef){
            cameraRef.stopRecording();
        }
    }
    
    const pickFromGallery = async () => {
        // allow to open gallery and pick an image or video from gallery
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [13, 9],
            quality: 1
        });

        // if item was selected
        if(!result.cancelled){
            //add the thumbnail to the selected video
            const sourceThumb = await generateThumbnail(result.uri);
            navigation.navigate('savePost', { source: result.uri, sourceThumb });
        }
    }

    //function to generate a thumbnail for the video
    const generateThumbnail = async (source) => {
        try {
          const { uri } = await VideoThumbnails.getThumbnailAsync(
            source,
            {
              time: 1000, //pick an image from video after 1 sec
            }
          );
          return uri;
        } catch (e) {
          console.warn(e);
        }
      };

    if(!hasCameraPermisions || !hasAudioPermisions || !hasGalleryPermisions){
        return (
            <View><Text>No Camera</Text></View>
        )
    }else{
        // console.log(galleryItems[0].uri)
        return (
            <View style={styles.container}>
                { 
                    isFocused ? 
                    <Camera
                        ref={ref => setCameraRef(ref)}
                        style={styles.camera}
                        ratio={'13:9'}
                        type={cameraType}
                        flashMode={cameraFlash}
                        onCameraReady={() => setIsCameraReady(true)}
                    />
                    :
                    null
                }


                <View style={styles.sideBarContainer}>
                    <TouchableOpacity 
                        style={styles.sideBarButton}
                        // toggle the button and change cameraType(switch between front and back)
                        onPress={() => setcameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
                        >
                        <Icon name="sync-alt" size={24} color="white" />
                        <Text style={styles.iconText}>Flip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.sideBarButton}
                        // toggle the button and change cameraFlash(turn it off or on, torch instead of on since its a video)
                        onPress={() => setCameraFlash(cameraFlash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)}
                        >
                        {
                            cameraFlash === Camera.Constants.FlashMode.off 
                            ?
                            <Icon name="bolt" size={24} color="white" />
                            :
                            <Icon name="bolt" size={24} color="yellow" />

                        }
                        <Text style={styles.iconText}>Flash</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.bottomBarContainer}>

                    <View style={{flex: 1, backgroundColor: 'blue'}}></View>

                    <View style={styles.recordButtonContainer}>
                        <TouchableOpacity 
                            disabled={!isCameraReady}
                            style={styles.recordButton}
                            onLongPress={() => recordVideo() }
                            onPressOut={() => stopVideo()}

                        />
                    </View>
                    <View style={{ flex: 1}}>
                        <TouchableOpacity 
                            onPress={() => pickFromGallery()}
                            style={styles.galleryButton}
                        >
                            {
                                galleryItems[0] == undefined 
                                ?
                                <></>
                                :
                                <Image 
                                    style={styles.galleryButtonImage}
                                    source={{ uri: galleryItems[1].uri }}
                                />

                            }
                        </TouchableOpacity>
                    </View>
                </View>                
            </View>
        )
    }
    
}
