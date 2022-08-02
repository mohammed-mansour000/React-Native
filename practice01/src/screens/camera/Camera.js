
import React from 'react'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RFNS from 'react-native-fs';
import {
    Button,
    StyleSheet,
  } from 'react-native';

const Camera = () => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const handleCapture = async () => {
        try {   
        const data = await takePicture();
        const filepath = data.uri;
        const newFilePath = RFNS.ExternalDirectoryPath + '/MyTest.jpg'
        RFNS.moveFile(filepath, newFilePath)
        .then(() => {
            console.log("image moved", filepath, "--- to ---", newFilePath);
        })
        .catch(
            err => {
            console.log(err);
            }
        )
        } catch (error) {
        console.log(error)
        }
    }
  return (
    <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
    >
        <Button
            title='Capture'
            color={'#1eb900'}
            onPress={() => handleCapture()}
        />

    </RNCamera>
  )
}

const styles = StyleSheet.create({
    preview:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
  
    }
  });

export default Camera