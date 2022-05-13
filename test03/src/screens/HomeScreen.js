import React, { Component, useState, useEffect } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Text,
    ScrollView,
    TextInput
    
} from "react-native";

import {getArticles, searchArticles}  from '../service/news';
import ModalComponent from '../component/modal'; 

export default function HomeScreen(){

    const [newsData, setNewsData] = useState([]);
    const [refreshing, setrefreshing] = useState(true);
    const [modalData, setmodalData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
     setrefreshing(true);
      getArticles()
      .then((data) => {
          setNewsData(data);
          setrefreshing(false);
      }).catch((err) => {
          console.log(err);
      });
    }, []);
    

    const renderItemComponent = (data) =>{
      //  console.log(`https://www.nytimes.com/${data.item.multimedia[0]?.url}`)
       // console.log(data.item.abstract)
        return (     
            <TouchableWithoutFeedback
             onPress={(e) => {handlePress(data)}}>
            <View style={styles.mainCardView}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.subCardView}>
                  <Image
                    source={{ uri: data.item.multimedia[0]?.url? `https://www.nytimes.com/${data.item.multimedia[0]?.url}` : 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg'}}
                    resizeMode="cover"
                    style={{
                      borderRadius: 25,
                      height: 70,
                      width: 70,
                    }}
                  />
                </View>
                <View style={{marginLeft: 12}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: 'bold',
                      fontFamily: 'nunitoBold',
                      textTransform: 'capitalize',
                      textAlign: 'justify',
                     
                    }}>
                    {data.item?.headline?.main}
                  </Text>
                  <View
                    style={{
                      marginTop: 4,
                      borderWidth: 0,
                      width: '85%',
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                      }}>
                      {data.item.abstract}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        );
            
    }

    const ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    const handlePress = (itemData) => {
        setModalVisible(true);
        setmodalData({
            url: itemData.item.multimedia[0]?.url? `https://www.nytimes.com/${itemData.item.multimedia[0]?.url}`: 'https://skillz4kidzmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
            title: itemData.item.headline?.main,
            description: itemData.item.lead_paragraph,
            web_url: itemData.item.web_url
        })
    }

    const handleRefresh = () => {
        setrefreshing(false)
        getArticles()
        .then((data) => {
            setNewsData(data);
        }).catch((err) => {
            console.log(err)
        });
        
    }

    const handleModalClose = () => {
        setModalVisible(false);
        setmodalData({});
      }

    const handleOnChange = (e) => {
        console.log(e);
        searchArticles(e)
        .then((data) => {
            setNewsData(data)
        }).catch((err) => {
            console.log(err);
        });
    }

  return (
    <SafeAreaView>
        <TextInput 
            style={{
                padding: 20,
                borderColor: '#888',
                borderWidth: 1,
                marginLeft: 12,
                marginRight: 12,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 10,
            }}
            placeholder='search news'
            onChangeText={handleOnChange}
        />
      <FlatList
        maxToRenderPerBatch={20}
        data={newsData}
        renderItem={item => renderItemComponent(item)}
        keyExtractor={item => Math.random().toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <ModalComponent 
          showModal={modalVisible}
          articleData={modalData}
          onClose={handleModalClose}
        />
    </SafeAreaView>
    
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    mainCardView: {
      height: 150,
      alignItems: 'center',
    //   justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
      overflow:  'hidden'
    },
    subCardView: {
      height: 70,
      width: 70,
      borderRadius: 25,
      backgroundColor: '#fff',
      borderColor: '#eeeee',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });