import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { GLOBAL_STYLES, images } from '../styles/global';

const ReviewDetails = ({ route }) => {
    // const pressHandler = () => {
    //     navigation.goBack();
    // }
    const { title, key, rating, body } = route.params;
    return (
        <ImageBackground source={require('../assets/game_bg.png')}  style={GLOBAL_STYLES.container}>
            <Card>
                <Text style={GLOBAL_STYLES.titleText}>{title}</Text>
                <Text style={GLOBAL_STYLES.titleText}>{body}</Text>   
                <View style={styles.rating}>
                    <Text>GameZone Rating:</Text>
                    <Image
                        source={images.ratings[rating]}
                    />
                </View>             
            </Card>
       </ImageBackground>
    )
}

export default ReviewDetails;

const styles = StyleSheet.create({
    rating: {
        paddingTop: 16,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    }
})

