import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import { GLOBAL_STYLES } from '../styles/global';

const About = () => {
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={GLOBAL_STYLES.container}>
            <Text style={GLOBAL_STYLES.titleText}>About Screen</Text>
        </ImageBackground>
    )
}

export default About
