import React, { useState } from 'react'
import { View, Text, ImageBackground, Modal, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/card';
import { GLOBAL_STYLES } from '../styles/global';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
    const [modalOpen, setmodalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    // const pressHandler = () => {
    //     navigation.navigate('Review Details');
    // }

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews([
            review,
            ...reviews
        ]);
        setmodalOpen(false);
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')}  style={GLOBAL_STYLES.container}>
            <Modal 
                visible={modalOpen}
                animationType='slide'
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            style={{...styles.modalToggle, ...styles.modalClose}} 
                            size={28}
                            name="close"
                            onPress={() => setmodalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                style={styles.modalToggle} 
                size={28}
                name="add"
                onPress={() => setmodalOpen(true)}
            />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        key={item.key}
                        onPress={() => navigation.navigate('Review Details', item)}
                        >
                        <Card>
                            <Text style={GLOBAL_STYLES.titleText}>{item.title}</Text>
                        </Card>    
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    modalToggle: {
        textAlign: 'right',
        color: '#333',
        marginBottom: 10,
        padding: 10,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#5f27cd',
        color: '#fff'
    },
    modalClose: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 0,
        color: '#333'
    },
    modalContent: {
        flex: 1
    }
})
