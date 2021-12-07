import React from 'react'
import { View, Text, StyleSheet, Image , ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation }) => {

    return (
        <View style={styles.header}>
            {/* icon for the menu */}
            {/* <MaterialIcons name='menu' size={28} /> */}
            <View style={styles.headerTitle}>
                <Image
                    style={styles.headerImage}
                    source={require('../assets/heart_logo.png')}
                />
                <Text style={styles.headerText}>Review App</Text>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    }
})
