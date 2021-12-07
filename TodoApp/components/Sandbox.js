import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

export default Sandbox;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#ddd',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    boxOne: {
        padding: 10,
        backgroundColor: 'skyblue'
    },
    boxTwo: {
        padding: 20,
        backgroundColor: 'violet'
    },
    boxThree: {
        padding: 30,
        backgroundColor: 'gold'
    },
    boxFour: {
        padding: 40,
        backgroundColor: 'coral'
    }
});
