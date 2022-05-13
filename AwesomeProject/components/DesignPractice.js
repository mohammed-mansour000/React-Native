import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

function DesignPractice() {
    const [users, setUsers] = useState([
        {id:1, name: "Mark Doe",   position:"CEO",               image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:11, name: "John Doe",   position:"CTO",               image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:2, name: "Clark Man",  position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3, name: "Jaden Boor", position:"Front-end dev",     image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4, name: "Srick Tree", position:"Backend-end dev",   image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5, name: "John Doe",   position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6, name: "John Doe",   position:"Manager",           image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8, name: "John Doe",   position:"IOS dev",           image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9, name: "John Doe",   position:"Web dev",           image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:91, name: "John Doe",   position:"Analyst",           image:"https://bootdey.com/img/Content/avatar/avatar7.png"}
    ]);
    
    const RenderItem = (user) => {
        console.log(user?.id)
        return (
            <TouchableOpacity style={styles.renderItemContainer}>
                <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/>
                </View>
               <View style={styles.imageContainer}>
                    <Image
                        source={{uri: user?.image}}
                        style={{ 
                            width: 80, 
                            height: 80,
                            borderRadius: 80,
                            borderWidth: 1,
                            borderColor: '#eee'
                        }}
                        
                    />
               </View>
               <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{user?.name}</Text>
                    <Text style={styles.positionText}>{user?.position}</Text>
               </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={{color: '#fff'}}>Follow</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                key={'#'}
                keyExtractor={(user) => user.id}
                data={users}
                renderItem={( {item} ) => RenderItem(item)}
                numColumns={2}
                contentContainerStyle={styles.flatlistContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
  )
}

export default DesignPractice;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 20,
        flex: 1,
        backgroundColor: "#E5E5E5"
    },
    flatlistContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    renderItemContainer: {
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingBottom: 20,
        marginHorizontal: 8,
        marginVertical: 8,
        width: '44%',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageContainer: {
        
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 5
    },
    positionText: {
        color: '#777',
        fontSize: 10
    },
    nameText: {

    },
    buttonContainer: {
        backgroundColor: '#00C0FF',
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        marginTop: 5
    },
    cardHeader: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        width: '40%',
        flexDirection: 'row',
        position: 'absolute',
        top: 10
    },
    icon: {
        height: 20,
        width: 20,
    }
})