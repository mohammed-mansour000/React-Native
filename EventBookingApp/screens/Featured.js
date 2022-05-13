/**
 * React Native Event Booking App UI - Featured Screnn
 * -> The screen can be seperated 4 sections
 * 
 * TODO:
 * [] Build the header section
 * [] Build the search section (TextInput)
 * [] Build the FEATURED section (Flatlist)
 * [] Build the FOR YOU section 
 */
import React from 'react';
import {
      View,
      StyleSheet,
      SafeAreaView ,
      TextInput,
      FlatList,
      ImageBackground,
      TouchableWithoutFeedback
      } from
'react-native';
import styled from 'styled-components/native';
import { FONTS, dummyData, SIZES, COLORS, icons, images } from '../constants';
import { McAvatar, McText, McIcon } from '../components'
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';

const Featured = ({ navigation }) => {

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback
      onPress={() => {
        console.log(item.image)
        navigation.navigate('EventDetail', {selectedItem: item})
      }}
      >
        <View 
        style={{
          marginLeft: index === 0 ? 0 : 15,
          marginRight: index === dummyData.Events.length - 1 ? 25 : 0,
        }}
        >
          <ImageBackground 
            resizeMode='cover'
            borderRadius={14}
            source={item.image}
            style={{
              width: SIZES.width / 2 + 50,
              height: SIZES.width / 2 + 50,
              justifyContent: 'space-between',
            }}
            >
              <View 
                style={{ 
                  alignItems: 'flex-end',
                  marginHorizontal: 15,
                  marginVertical: 15,
                }}
              >
                <DateBox>
                  <McText color={COLORS.black} body5 style={{opacity: 0.5}}>{moment(item.startingTime).format('MMM').toUpperCase()}</McText>
                  <McText color={COLORS.black} h2>{moment(item.startingTime).format('DD')}</McText>
                </DateBox>
              </View>
              <View style={{
                marginLeft: 15,
                marginBottom: 20,
              }}>
                <McText style={{opacity: 0.5}}>{item.type}</McText>
                <McText h2>{item.title}</McText>
              </View>
          </ImageBackground>
        </View> 
      </TouchableWithoutFeedback>
      
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header section */}
      <SectionHeader>
        <View>
          <McText body5 style={{opacity: 0.5}}>December 21 8:10 AM</McText>
          <McText h1>Explore Events</McText>
        </View>
        <McAvatar source={images.avatar}/>
      </SectionHeader>
      {/* search section */}
      <SectionSearch>
        <SearchView>
          <McIcon source={icons.search} size={24}/>

          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.gray1}
            style={styles.featureInput}
          />

          <McIcon  source={icons.filter} size={24}/>
        </SearchView>
      </SectionSearch>
      {/* featured */}
      <SectionTitle>
        <McText h5>Features</McText>
        <View>
          <FlatList 
            horizontal
            keyExtractor={(item) => 'event_' + item.id}
            contentContainerStyle={{}}
            data={dummyData.Events}
            renderItem={_renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </SectionTitle>
      {/* for you */}
      <View style={{marginLeft: 20}}>
        <McText h5>FOR YOU</McText>
      </View>
      <LinearGradient
        colors={COLORS.linear}
        start={{x: 0, y: 0}}
        end={{x:1, y: 1}}
        style={{
          height: 90,
          marginHorizontal: 20,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        > 
          <GiftBox>
            <McIcon source={icons.gift} size={24} />
          </GiftBox>
          <View
            style={{
              marginLeft: 15
            }}
          >
            <McText h4>Claim 1 free ticket</McText>
            <McText body5 style={{width: 180}}>Share an event with friends and get 1 ticket</McText>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};


const SectionHeader = styled.View`
  flex-direction: row;
  padding: 16px ${SIZES.padding}px;
  align-items: center;
  justify-content: space-between
`;

const SectionSearch = styled.View`
  margin: 4px ${SIZES.padding}px;
  
  height: 50px;
  background-color: ${COLORS.input};
  border-radius: 15px;
  justify-content: center;
`;

const SearchView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
`;

const SectionTitle = styled.View`
  margin: 20px ${SIZES.padding}px
`;

const DateBox = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center
`;

const GiftBox = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  justify-content: center;
  align-items: center
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  featureInput: {
    fontSize: 16, 
    fontFamily: 'ProductSans-Bold' , 
    lineHeight: 22, 
    width: 250, 
    color: COLORS.white 
  }
});

export default Featured;
