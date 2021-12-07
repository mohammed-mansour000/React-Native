/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
 * 
 * TODO:
 * [] Build the header image background section
 *    [] Rendering the image background sub section (ImageBackground)
 *    [] Rendering the header sub section
 *    [] Rendering the footer sub section (LinearGradient)
 * [] Build the buttons group section
 * [] Build the description section
 * [] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */
import React, { useState, useEffect } from 'react';
import { 
        Text, 
        View, 
        StyleSheet,
        ScrollView,
        ImageBackground,
        Platform,
        TouchableOpacity ,
        Alert
      } 
from 'react-native';
import styled from 'styled-components/native';
import { FONTS, dummyData, SIZES, COLORS, icons, images } from '../constants';
import { McAvatar, McText, McIcon } from '../components'
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyle } from '../constants/dummy';

const EventDetail = ({ navigation, route }) => {
  const [selectedEvent, setselectedEvent] = useState({});

  useEffect(() => {
    const { selectedItem } = route.params;
    setselectedEvent(selectedItem);
  }, []);

   
  return(
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.black
        }}
        style={{
          backgroundColor: COLORS.black
        }}
      >
        {/* ImageBackground */}
        <ImageBackground
          resizeMode='cover'
          source={selectedEvent?.image}
          style={{
            width: '100%',
            height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
          }}
        >
          <View style={{
            flex: 1
          }}>
            {/* image Header */}
            <SectionImageHeader>
              <TouchableOpacity
                onPress={() => {
                  console.log('arrow clicked');
                  navigation.goBack();
                }}
                style={styles.iconStyle}
              >
                <McIcon source={icons.back_arrow} size={24} />
              </TouchableOpacity>
              <View
                style={{
                 ...styles.iconStyle,
                  width: 80,                 
                  justifyContent: 'space-around',
                  flexDirection: 'row'
                }}
              >
                <TouchableOpacity>
                  <McIcon source={icons.like} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <McIcon source={icons.share} size={24}/>
                </TouchableOpacity>
              </View>
            </SectionImageHeader>
            {/* image footer */}
            <SectionImageFooter>
                <LinearGradient
                  colors={['transparent','#000']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 2 }}
                  style={{
                    width: '100%',
                    height: 200,
                    justifyContent: 'flex-end'
                  }}
                >
                  <FooterContentView>
                    <View>
                      <McText body4 style={{ opacity: 0.5, letterSpacing: 2 }}>
                        {selectedEvent?.type}
                      </McText>
                      <McText h1>
                        {selectedEvent?.title}
                      </McText>
                      <McText body4 style={{ opacity: 0.5, letterSpacing: 1.5 }}>
                        STARTING {moment(selectedEvent?.startingTime).format('hh:mm A')}
                      </McText>
                    </View>
                    <LinearGradient
                      colors={COLORS.linear}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <McText body5 style={{opacity: 0.5}}>
                        {moment(selectedEvent.startingTime).format('MMM').toUpperCase()}
                      </McText>
                      <McText h2>
                        {moment(selectedEvent.startingTime).format('DD')}
                      </McText>
                    </LinearGradient>
                  </FooterContentView>
                </LinearGradient>
            </SectionImageFooter>
          </View>
        </ImageBackground>

        {/* buttons group section */}
        <ButtonGroupSection>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              padding: 6,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <McText style={{color: COLORS.black}} h6>ABOUT</McText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.input,
              padding: 6,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <McText style={{opacity: 0.5}} h6>PARTICIPANTS</McText>
          </TouchableOpacity>
        </ButtonGroupSection>

        {/* description section */}
        <DescriptionSection>
          <McText body4>
            {selectedEvent.description}
          </McText>
        </DescriptionSection>

        {/* location section */}
        <LocationSection>
          <McText h4>LOCATION</McText>
          <View
            style={{
              heigh: 250,
              borderRadius: 30, 
              overflow: 'hidden',
              marginTop: 20
            }}
          >
            <MapView
              provider={ PROVIDER_GOOGLE }
              style={{
                height: 250,
              }}
              initialRegion={dummyData.Region}
              minZoomLevel={15}
              customMapStyle={MapStyle}
            >

            </MapView>
          </View>
          <View style={{paddingBottom: 130}}></View>
        </LocationSection>
      </ScrollView>

        {/* fixed buttom bar */}
        <BottomBarSection>
          <View 
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 25
            }}
          >
            <View>
              <McText body3 style={{opacity: 0.5}}>PRICE</McText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <McText h2>$17.60</McText>
                <McText h3>/person</McText>
              </View>
            </View>
            <LinearGradient
                colors={COLORS.linear}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: '48%',
                  height: 53,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={() => {Alert.alert('Yay!', 'You Bought A Ticket', [
                    { text: 'OK', onPress: () => console.log('alert closed') }
                  ])}}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <McText h6>BUT A TICKET</McText>
                  <McIcon 
                    source={icons.buy_ticket} 
                    size={24}
                    style={{
                      marginLeft: 10
                    }}
                  />
                </TouchableOpacity>
            </LinearGradient>
          </View>
        </BottomBarSection>
    </View>
  );
};

const SectionImageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios' ? '40px' : '20px'};
  margin-left: 20px
  margin-right: 20px
`;
  
const SectionImageFooter = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

const FooterContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center
`;

const ButtonGroupSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 55%
  margin: 15px 30px;
`;

const DescriptionSection = styled.View`
  margin: 0px 30px;
`;

const LocationSection = styled.View`
  margin: 25px 30px;
`;

const BottomBarSection = styled.View`
  height: 130px;
  width: ${SIZES.width}px;
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.tabBar};
  position: absolute;
  bottom: 0px;
  justify-content: center
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  iconStyle: {
    opacity: 0.5,
    width: 55,
    height: 40,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});

export default EventDetail;
